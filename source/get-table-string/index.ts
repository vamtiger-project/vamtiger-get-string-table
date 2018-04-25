import {
    Row as Rows,
    GetTableStringParams as Params,
    Marker
} from '../types';

const newLine = '\n';

export default (params: Params) => {
    const header = params.header;
    const body = params.body;
    const rowLeangth = body[0].length;
    const headerLine = header && Marker.header.repeat(rowLeangth);
    const headerRow = headerLine && [
        headerLine,
        header,
        headerLine
    ].join(newLine) || '';
    const bodyLine = Marker.body.repeat(rowLeangth);
    const bodyRows = body.join(`${newLine}${bodyLine}${newLine}`);
    const tableString = [
        headerRow,
        bodyRows,
        bodyLine
    ].join(newLine);

    return tableString;
}