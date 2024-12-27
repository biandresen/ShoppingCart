import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";

async function fetchData(url: string): Promise<Product[]> {
  const response = await axios.get<Product[]>(url);
  return response.data;
}

export function useFetch(key: string, url: string) {
  return useQuery<Product[]>({
    queryKey: [key],
    queryFn: () => fetchData(url),
  });
}
