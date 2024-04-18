#!/usr/bin/env node
import * as process from "process";
import {createInterface, ReadLineOptions} from "readline";
import Command from "./command";

const readLineOptions: ReadLineOptions = {
    input: process.stdin,
    output: process.stdout,
    terminal: false
}

process.stdout.write("Welcome to Katlego's Toy Robot Application.\n");
process.stdout.write("Please use one of the commands: PLACE (0,0,NORTH), LEFT, RIGHT, MOVE, REPORT\n");

const readLine = createInterface(readLineOptions);
const controller = new Command();

readLine.prompt(true);
readLine.on('line', (line: string) => {
    controller.handle(line.toUpperCase());
    readLine.prompt(true);
});