import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchController = new AbortController();
    const { signal } = fetchController;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { signal });
        const data = await res.json();
        setLoading(false);
        setData(data.data);
      } catch (error) {
        if (error.name.includes("Abort")) {
          console.log(error.name);
        } else {
          setLoading(false);
          console.log(error);
        }
      }
    };
    fetchData();

    return () => fetchController.abort();
  }, [url]);
  return { data, loading };
};
