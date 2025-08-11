import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // 언마운트 방지용 플래그

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("데이터 불러오기 실패");
        return res.json();
      })
      .then((data) => {
        if (!ignore) setData(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [url]);
  return { data, loading, error };
}
