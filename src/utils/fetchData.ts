import axios from "axios";
import { ResponsePayload } from "../hooks/useFetchData";

export const fetchData = ((): ((
  url: string,
  token: string | undefined
) => Promise<ResponsePayload[]>) => {
  let lastUrlCache = {};

  return async (url, token) => {
    if (!lastUrlCache[url as keyof typeof lastUrlCache] && token) {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      lastUrlCache = { [url]: response.data };
    }

    return lastUrlCache[url as keyof typeof lastUrlCache];
  };
})();
