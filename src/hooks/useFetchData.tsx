import { useCallback, useEffect, useState } from "react";
import { SENSORS_URL } from "../constants/fetchData";
import { fetchData } from "../utils/fetchData";

export type ResponsePayload = {
  id: number;
  name: string;
  serialNumber: string;
  status: string;
  connectionStatus: string;
  deviceType: string;
};

export const useFetchData = () => {
  const [data, setData] = useState<ResponsePayload[]>([]);

  const getDataList = useCallback(async (): Promise<void> => {
    try {
      const response = await fetchData(SENSORS_URL);

      setData(response);
    } catch (e) {
      console.log("Failed to fetch", e);
    }
  }, []);

  useEffect(() => {
    getDataList();
  }, [getDataList]);

  return data;
};
