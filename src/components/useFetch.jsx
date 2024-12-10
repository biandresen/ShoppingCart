import { useState, useEffect } from "react";

export default function useFetch({ url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);
    fetch(url, {
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch guitars");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name === "AbortError") console.log("Fetch aborted");
        else setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}
