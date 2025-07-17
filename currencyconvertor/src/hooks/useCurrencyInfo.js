import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1.0.0/latest/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => {
        setData(res[currency]);
        console.log("Fetched data:", res[currency]);
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
