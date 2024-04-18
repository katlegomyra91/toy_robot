import { expect } from 'chai';
import Table from '../src/table';

describe('Table', () => {
    const table = new Table(5, 3);
    it('should return maxX', () => {
        expect(table.getMaxX()).to.eq(5);
    });

    it('should return maxY', () => {
        expect(table.getMaxY()).to.eq(3);
    });
});
