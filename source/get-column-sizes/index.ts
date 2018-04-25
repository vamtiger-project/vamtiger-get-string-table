import {
    GetColumnSizesParams as Params
} from '../types';

export default (params: Params) => {
    const rows = params.rows;
    const columnSizes = [] as number[];

    let updateColumnSize: boolean;
    let columnSize: number;

    rows.forEach((row, rowIndex) => row.forEach((column, columnIndex) => {
        columnSize = columnSizes[columnIndex];
        
        !columnSizes.length
            ||
            !columnSize
            ||
            columnSize < column.length
            ? 
            columnSizes[columnIndex] = column.length
            :
            undefined;
    }));

    return columnSizes;
};