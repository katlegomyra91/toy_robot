import {IPosition} from "./iPosition";
import Table from "./table";

export default class Robot {
    private position: IPosition;
    private table: Table;

    constructor(position: IPosition, table: Table) {
        this.position = position;
        this.table = table;
    }

    public changeDirection(direction: string): void {
        switch (this.position.direction) {
            case "NORTH":
                if (direction === "LEFT") {
                    this.position.direction = "WEST";
                } else if (direction === "RIGHT") {
                    this.position.direction = "EAST";
                }
                break;
            case "WEST":
                if (direction === "LEFT") {
                    this.position.direction = "SOUTH";
                } else if (direction === "RIGHT") {
                    this.position.direction = "NORTH";
                }
                break;
            case "SOUTH":
                if (direction === "LEFT") {
                    this.position.direction = "EAST";
                } else if (direction === "RIGHT") {
                    this.position.direction = "WEST";
                }
                break;
            case "EAST":
                if (direction === "LEFT") {
                    this.position.direction = "NORTH";
                } else if (direction === "RIGHT") {
                    this.position.direction = "SOUTH";
                }
                break;
        }
    }

    public place(position: string): boolean {
        const strippedPosition = position.split("PLACE")[1].trim();
        const arrPosition = strippedPosition.split(",", 3);
        if (
            arrPosition.length === 3
            && (+arrPosition[0] >= 0 && +arrPosition[0] <= this.table.getMaxX())
            && (+arrPosition[1] >= 0 && +arrPosition[1] <= this.table.getMaxY())
            && ["NORTH", "WEST", "SOUTH", "EAST"].includes(arrPosition[2].toUpperCase())
        ) {
            this.position = <IPosition>{
                x: +arrPosition[0],
                y: +arrPosition[1],
                direction: arrPosition[2].toUpperCase()
            };
            return true;
        }
        return false;
    }

    public move(): boolean {
        switch (this.position.direction) {
            case "NORTH":
                if (this.position.y !== this.table.getMaxY()) {
                    ++this.position.y;
                    return true;
                }
                break;
            case "SOUTH":
                if (this.position.y !== 0) {
                    --this.position.y;
                    return true;
                }
                break;
            case "EAST":
                if (this.position.x !== this.table.getMaxX()) {
                    ++this.position.x;
                    return true;
                }
                break;
            case "WEST":
                if (this.position.x !== 0) {
                    --this.position.x;
                    return true;
                }
                break;
            default:
        }
        return false;
    }

    public toString() {
        return `${this.position.x},${this.position.y},${this.position.direction}`;
    }
}