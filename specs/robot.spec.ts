import { expect } from 'chai';
import Robot from '../src/robot';
import Table from '../src/table';

describe('Robot', () => {
    it('should be initialized with the given position parameters', () => {
        const table = new Table(5, 5);
        const robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
        expect(robot.toString()).to.eq('0,0,NORTH');
    });

    it('should be placed with the given position parameters', () => {
        const table = new Table(5, 5);
        const robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
        robot.place('PLACE 2,3,SOUTH');
        expect(robot.toString()).to.eq('2,3,SOUTH');
    });

    it('should be turned to the left', () => {
        const table = new Table(5, 5);
        const robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
        expect(robot.toString()).to.eq('0,0,WEST');
    });

    it('should be turned to the right', () => {
        const table = new Table(5, 5);
        const robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
        robot.changeDirection("RIGHT");
        expect(robot.toString()).to.eq('0,0,EAST');
    });

    it('should move 1 block', () => {
        const table = new Table(5, 5);
        const robot = new Robot(
            {
                x: 0,
                y: 0,
                direction: "NORTH"
            },
            table
        );
        robot.move();
        expect(robot.toString()).to.eq('0,1,NORTH');
    });
});
