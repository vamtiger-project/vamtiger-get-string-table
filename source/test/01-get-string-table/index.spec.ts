import { resolve as resolvePath, dirname } from 'path';
import { expect } from 'chai';
import { default as mockData, expected} from './mock-data';
import getStringTable from '../..';

const table = resolvePath(
    __dirname,
    'mock-data/index.ts'
);

describe('vamtiger-get-string-table should', function () {
    it('return a string table', async function () {
        const stringTable = getStringTable(mockData);

        expect(stringTable).to.be.ok;
        expect(stringTable).to.equal(expected)
    });
});