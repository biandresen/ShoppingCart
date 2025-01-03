import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";


async function fetchData(url: string): Promise<Product[]> {
  const response = await axios.get(url);

  // If response.data is an object and has a 'products' property, return it
  if (response.data && typeof response.data === "object" && Array.isArray(response.data.products)) {
    return response.data.products;
  }

  // If response.data is already an array of products, return it directly
  if (Array.isArray(response.data)) {
    return response.data;
  }

  // In case of any unexpected data, throw an error
  throw new Error("Invalid data structure");
}

export function useFetch(key: string, url: string) {
  return useQuery<Product[]>({
    queryKey: [key],
    queryFn: () => fetchData(url),
  });
}
