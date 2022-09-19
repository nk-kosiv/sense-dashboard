import axios from "axios";
import { AUTHENTICATION_TOKEN } from "../constants/fetchData";
import { ResponsePayload } from "../hooks/useFetchData";

export const fetchData = ((): ((url: string) => Promise<ResponsePayload[]>) => {
  let lastUrlCache = {};
  
  return async (url) => {
    if (!lastUrlCache[url as keyof typeof lastUrlCache]) {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AUTHENTICATION_TOKEN}`,
        },
      });

      lastUrlCache = { [url]: response.data };
    }

    return lastUrlCache[url as keyof typeof lastUrlCache];
  };
})();
