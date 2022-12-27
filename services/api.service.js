import axios from "axios";

import { getKeyValue } from "./storage.service.js";
import { printError } from "./log.service.js";
import { TOKEN, BASE_URL } from "../helpers/constants.js";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getWeather = async (city) => {
  const token = process.env.TOKEN || (await getKeyValue(TOKEN));
  if (!token) {
    return printError("Please set token using this command -t [API_KEY]");
  }
  const { data } = await axiosInstance.get("/data/2.5/weather", {
    params: {
      q: city,
      appid: token,
      units: "metric",
    },
  });
  return data;
};
