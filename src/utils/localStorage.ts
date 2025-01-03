export function storeLocalItems(key: string, value: any) {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    console.error(`Error storing ${key} in localStorage:`, error);
  }
}

export function getLocalItems<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  } catch (error) {
    console.error(`Error retrieving ${key} from localStorage:`, error);
    return null;
  }
}
