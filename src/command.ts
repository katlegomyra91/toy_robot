import * as process from 'process';
import Robot from "./robot";
import Table from "./table";

export default class Command {
    private robot: Robot;

    constructor() {
        const table = new Table(5, 5);
        this.robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
    }

    public handle(command: string): void {
        switch (command) {
            case "LEFT":
            case "RIGHT":
                this.robot.changeDirection(command);
                break;
            case "MOVE":
                if (!this.robot.move()) {
                    process.stdout.write("Invalid MOVE, cannot MOVE Robot off the table, it will fall :(\n");
                }
                break;
            case "REPORT":
                process.stdout.write(this.robot.toString() + '\n');
                break;
            default:
                if (command.includes('PLACE')) {
                    if (!this.robot.place(command)) {
                        process.stdout.write("Invalid PLACE, cannot PLACE the Robot outside the table\n");
                    }
                } else {
                    process.stdout.write("Invalid input, please use one of the commands: PLACE (0,0,NORTH), LEFT, RIGHT, MOVE, REPORT\n");
                }
                break;
        }
    }
}