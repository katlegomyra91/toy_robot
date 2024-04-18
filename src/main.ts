import * as process from "process";
import {createInterface, ReadLineOptions} from "readline";

const readLineOptions: ReadLineOptions = {
    input: process.stdin,
    output: process.stdout,
    terminal: false
}

process.stdout.write("Welcome to Katlego's Toy Robot Application.\n");
process.stdout.write("Please the available commands: PLACE (0,0,NORTH), LEFT, RIGHT, MOVE, REPORT\n");

const readLine = createInterface(readLineOptions);
readLine.prompt(true);
readLine.on('line', (line: string) => {
    console.log(line);
    readLine.prompt(true);
});