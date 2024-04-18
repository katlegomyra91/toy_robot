export default class Command {
    public handle(command: string): void {
        switch (command) {
            case "LEFT":
                console.log('face robot left');
                break;
            case "RIGHT":
                console.log('face robot right');
                break;
            case "MOVE":
                console.log('move robot 1 space');
                break;
            case "REPORT":
                console.log('report robot position');
                break;
            default:
                let falseInput = false;
                if (command.includes('PLACE')) {
                    console.log('place robot');
                } else {
                    falseInput = true;
                }

                if (falseInput) {
                    console.log('Invalid input, please use one of the commands: PLACE (0,0,NORTH), LEFT, RIGHT, MOVE, REPORT\n');
                }
                break;
        }
    }
}