import {
    GetRowString as Params,
    Marker
} from '../types';

export default (params: Params) => {
    const row = params.row;
    const columnSizes = params.columnSizes;
    const rowString = row
        .map((column, index) => column.padEnd(columnSizes[index]))
        .join(` ${Marker.vertical} `);

    return `${Marker.vertical} ${rowString} ${Marker.vertical}`;
}