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
        -s [CITY] set city
        -h show help
        -t [API_KEY] save token
        `
  );
};
