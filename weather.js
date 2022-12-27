#!/usr/bin/env node\
import { CITY, TOKEN } from "./helpers/constants.js";
import { getArgs } from "./helpers/get-args.helper.js";
import { getIcon } from "./helpers/get-icon.helper.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, setKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("Token is required");
  }
  try {
    await setKeyValue(TOKEN, token);
    printSuccess("Token was successfully saved");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    return printError("City is required");
  }
  try {
    await setKeyValue(CITY, city);
    printSuccess("City was successfully saved");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY || (await getKeyValue(CITY));
    const weather = await getWeather(city);
    const icon = getIcon(weather.weather[0].icon);
    printWeather(weather, icon);
  } catch (e) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.c) {
    return saveCity(args.c);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};

initCLI();
