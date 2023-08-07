import { getData } from "./../services/api";
import { DataItem } from "./../helpers/interface";

import { useMemo, useState } from "react";

type Data = DataItem[] | null;
type ErrorType = null | string;

const useData = () => {
  const [data, setData] = useState<Data>(null);
  const [error, setError] = useState<ErrorType>(null);
  const handelGetData = async () => {
    try {
      const dataFrom = await getData();
      console.log(dataFrom);

      if (dataFrom) setData(dataFrom);
      return dataFrom;
    } catch (error) {
      if (typeof error === "string") setError(error);
    }
  };
  const value = useMemo(() => {
    return { data, error };
  }, [data, error]);
  return {
    value,
    handelGetData,
  };
};

export default useData;
