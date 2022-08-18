import axios from "axios";
import { useEffect, useState } from "react";
import { t } from "i18next";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  },
});

const useApi = (query, page) => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    if (!random) {
      client
        .get("/search/photos", {
          params: { query, page },
        })
        .then((res) => {
          if (!res.statusText === "OK") {
            throw Error(t("weAreUnable"));
          }
          if (res.data.total <= 0) {
            throw Error(t("noGivenPhrase"));
          }
          setImages((prev) => {
            return [...new Set([...prev, ...res.data.results])];
          });
          setHasMore(res.data.results.length > 0);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    } else {
      client
        .get("/photos/random", {
          params: { count: 10 },
        })
        .then((res) => {
          if (!res.statusText === "OK") {
            throw Error(t("weAreUnable"));
          }
          setImages((prev) => {
            return [...new Set([...prev, ...res.data])];
          });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  }, [random, query, page]);
  return { images, setImages, setRandom, random, loading, error, hasMore };
};

export default useApi;
