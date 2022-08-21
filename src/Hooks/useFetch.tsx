import axios from "axios";
import { useEffect, useState } from "react";

/*_______________________________*/

export type Book = {
  id: number;
  title: string;
  authors: [{ name: string }];
  download_count: number;
  formats: { "image/jpeg": string };
};

export type BookList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
};

/*_______________________________*/

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BookList>();
  const [error, setError] = useState<Error | boolean>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err: unknown) {
        setError(err as Error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;

/*____________________________________________________________________________*/
