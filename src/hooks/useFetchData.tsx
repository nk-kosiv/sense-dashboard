import { useCallback, useEffect, useState } from "react";
import { SENSORS_URL, AUTHENTICATION_TOKEN } from "../constants/fetchData";
import { DeviceDataType } from "../types/dashboard";
import { fetchData } from "../utils/fetchData";

export type ResponsePayload = DeviceDataType & {
  deviceType: string;
};

export const useFetchData = () => {
  const [data, setData] = useState<ResponsePayload[]>([]);

  const getDataList = useCallback(async (): Promise<void> => {
    try {
      const response = await fetchData(SENSORS_URL, AUTHENTICATION_TOKEN);

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
