export default class Table {
    private maxX: number;
    private maxY: number;

    constructor(x: number, y: number) {
        this.maxX = x;
        this.maxY = y;
    }

    public getMaxX():number {
        return this.maxX;
    }

    public getMaxY():number {
        return this.maxY;
    }
}