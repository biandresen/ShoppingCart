// LOCAL STORAGE FUNCTIONS
// These functions allow you to store and retrieve data from the browser's localStorage.

import { logger } from "./logger";

// Set an item in localStorage
export function setLocalStorage<T>(key: string, value: T): void {
  if (!key) {
    logger.error("Key is required to set an item in localStorage.");
    return;
  }
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    logger.error(`Error storing "${key}" in localStorage.`, error);
  }
}

// Get an item from localStorage
export function getLocalStorage<T>(key: string): T | null {
  if (!key) {
    logger.error("Key is required to get an item from localStorage.");
    return null;
  }
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    logger.error(`Error retrieving "${key}" from localStorage.`, error);
    return null;
  }
}
