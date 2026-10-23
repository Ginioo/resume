# Deploy — ginioo.com

- Site: https://ginioo.com/

## Look up resource IDs (once per session)

```bash
# S3 bucket
aws s3 ls

# CloudFront distribution ID for ginioo.com
aws cloudfront list-distributions --query "Items[?Aliases.Items[]=='ginioo.com'].Id"
```

Replace `<bucket>` and `<dist-id>` in the steps below with the values above.

## Steps

1. **Build**

   ```bash
   yarn build
   ```

2. **Upload `build/*` to S3** (contents only, not the `build` folder itself).
   `--delete` removes orphaned old-hash assets no longer referenced.

   ```bash
   aws s3 cp build/ s3://<bucket>/ --recursive --delete
   ```

3. **Create a CloudFront invalidation for `/`**

   Console: CloudFront → your distribution → Invalidation Paths → Invalidate `/`

   Or CLI:

   ```bash
   aws cloudfront create-invalidation --distribution-id <dist-id> --paths "/"
   ```

Invalidating `/` covers every object — no need to list file paths.

## Verify

The page should serve the new bytes within ~15 seconds.

```bash
curl -sI https://ginioo.com/ | grep -iE 'last-modified|x-cache'
```

`last-modified` should match the upload time. If the page still looks old in your browser, the site content is fine — it is your local cache: hard refresh (⌘⇧R) or open a private window.
