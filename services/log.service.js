import chalk from "chalk";
import dedent from "dedent";

export const printError = (error) => {
  console.log(`${chalk.bgRed(`ERROR`)} ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(`SUCCESS`)} ${message}`);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
        Without any params - show weather
        -c [CITY] set city
        -h show help
        -t [API_KEY] save token
        `
  );
};

export const printWeather = (data, icon) => {
  const weather = data.weather[0];
  console.log(
    dedent`${chalk.bgYellow("WEATHER")}
        City: ${data.name}
        Temperature: ${data.main.temp}/${data.main.feels_like}
        Weather: ${icon} ${weather.main} (${weather.description})
        Humidity: ${data.main.humidity}%
        Wind: ${data.wind.speed}km/h
        `
  );
};
