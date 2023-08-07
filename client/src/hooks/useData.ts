import { getData } from "./../services/api";
import { DataItem } from "./../helpers/interface";

import { useMemo, useState } from "react";

type Data = DataItem[] | null;
type ErrorType = null | string;

const useData = () => {
  const [data, setData] = useState<Data>(null);
  const [dateTime, setDataTime] = useState<DataItem[] | null>(null);
  const [error, setError] = useState<ErrorType>(null);
  const handelGetData = async () => {
    try {
      const dataFrom = await getData();
      console.log(dataFrom);

      if (dataFrom) setData(dataFrom);
      
        setDataTime(() => {
          return dataFrom.map((item) => ({
            ...item,
            dateTime: `${item.date} ${item.time}`,
          }));
        });
      
      return dataFrom;
    } catch (error) {
      if (typeof error === "string") setError(error);
    }
  };
  const value = useMemo(() => {
    return { data,dateTime, error };
  }, [data,dateTime, error]);
  return {
    value,
    handelGetData,
  };
};

export default useData;
