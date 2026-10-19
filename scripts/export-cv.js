import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
const outputPath = path.join(repositoryRoot, 'src', 'cv.pdf');
const previewUrl = 'http://127.0.0.1:4173/';
const readinessTimeoutMs = 30_000;

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repositoryRoot,
      stdio: 'inherit',
      ...options,
    });

    child.once('error', reject);
    child.once('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with ${signal ?? `code ${code}`}`));
      }
    });
  });
}

function startPreview() {
  const child = spawn(
    'yarn',
    ['vite', 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'],
    {
      cwd: repositoryRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  let output = '';
  let readyResolve;
  let readyReject;
  let settled = false;
  let readinessTimer;

  const ready = new Promise((resolve, reject) => {
    readyResolve = resolve;
    readyReject = reject;
  });

  const onOutput = (chunk) => {
    const text = chunk.toString();
    process.stdout.write(text);
    output = `${output}${text}`.slice(-4000);

    if (!settled && /Local:\s+http:\/\/127\.0\.0\.1:4173\//.test(output)) {
      settled = true;
      clearTimeout(readinessTimer);
      readyResolve();
    }
  };

  child.stdout.on('data', onOutput);
  child.stderr.on('data', onOutput);
  child.once('error', (error) => {
    if (!settled) {
      settled = true;
      clearTimeout(readinessTimer);
      readyReject(error);
    }
  });
  child.once('exit', (code, signal) => {
    if (!settled) {
      settled = true;
      clearTimeout(readinessTimer);
      readyReject(new Error(`Vite preview exited before readiness with ${signal ?? `code ${code}`}`));
    }
  });

  readinessTimer = setTimeout(() => {
    if (!settled) {
      settled = true;
      readyReject(new Error(`Vite preview did not become ready within ${readinessTimeoutMs}ms`));
    }
  }, readinessTimeoutMs);

  return { child, ready };
}

async function stopPreview(child) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return;
  }

  const exited = new Promise((resolve) => child.once('exit', resolve));
  child.kill('SIGTERM');

  const killTimer = setTimeout(() => {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill('SIGKILL');
    }
  }, 5000);
  killTimer.unref();

  await exited;
  clearTimeout(killTimer);
}

async function main() {
  await run('yarn', ['build']);

  const preview = startPreview();
  let browser;

  try {
    await preview.ready;
    browser = await chromium.launch();
    const page = await browser.newPage();
    const response = await page.goto(previewUrl, {
      waitUntil: 'networkidle',
      timeout: readinessTimeoutMs,
    });

    if (!response?.ok()) {
      throw new Error(`Resume page request failed: ${response?.status() ?? 'no response'}`);
    }

    await page.evaluate(() => document.fonts.ready);
    const fontStatus = await page.evaluate(() => document.fonts.status);
    if (fontStatus !== 'loaded') {
      throw new Error(`Document fonts did not finish loading (status: ${fontStatus})`);
    }

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        right: '12mm',
        bottom: '12mm',
        left: '12mm',
      },
    });

    console.log(`Exported CV PDF to ${path.relative(repositoryRoot, outputPath)}`);
  } finally {
    if (browser) {
      await browser.close();
    }
    await stopPreview(preview.child);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
