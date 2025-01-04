// CENTRALIZED LOGGER
// This logger can be used to log errors and send them to an external service

export const logger = {
  error: (message: string, error?: unknown) => {
    console.error(`[ERROR]: ${message}`, error);
    // Optional: Send logs to an external service
    // sendToLogService(message, error);
  },
};
