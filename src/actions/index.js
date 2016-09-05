export const EXECUTE_COMMAND = 'EXECUTE_COMMAND';

export function execute(command) {
  return {
    type: EXECUTE_COMMAND,
    payload: command
  };
}