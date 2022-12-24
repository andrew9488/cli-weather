import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");
const isFileExisted = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};
const readFile = async (path) => {
  if (await isFileExisted(path)) {
    const file = await promises.readFile(path);
    return JSON.parse(file);
  }
  return {};
};

export const setKeyValue = async (key, value) => {
  let data = {};
  data = await readFile(filePath);
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
  const data = await readFile(filePath);
  if (data.hasOwnProperty(key)) {
    return data[key];
  }
  return null;
};
