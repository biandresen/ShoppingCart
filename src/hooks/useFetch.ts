import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

//* Using generics (T) to make the function reusable

// Fetch data from an API
async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.get(url);

  // Check if the response has the expected data structure
  if (response.data) {
    return response.data;
  } else {
    // In case of any unexpected data, throw an error
    throw new Error("Invalid data structure");
  }
}

// Custom hook to fetch data with TanStack's react-query
export function useFetch<T>(key: string, url: string): UseQueryResult<T> {
  return useQuery<T>({
    queryKey: [key],
    queryFn: () => fetchData(url),
  });
}
