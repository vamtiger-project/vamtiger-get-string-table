import getColumnSizes from './get-column-sizes';
import getRowString from './get-row-string';
import getTableString from './get-table-string';
import {
    MainParams as Params,
    Marker as MarkerType,
    StringObject
} from './types';

const MarkerObject = MarkerType as any;
const Marker = MarkerObject as StringObject;

export default (params: Params) => {
    const header = params.header;
    const body = params.body;
    const hideMarker = params.hideMarker;
    const markerPattern = hideMarker && Object
        .keys(Marker)
        .map(key => Marker[key] === MarkerType.vertical ? `(\\${Marker[key]})` : `(${Marker[key]})`)
        .join(MarkerType.vertical);
    const markerRegex = markerPattern && new RegExp(markerPattern, 'gm');
    const rows = header && [header].concat(body) || body;
    const columnSizes = getColumnSizes({ rows });
    const headerString = header && getRowString({ 
        row: header,
        columnSizes
    });
    const bodyRowStrings = body.map(row => getRowString({
        row,
        columnSizes
    }));

    let tableString = getTableString({
        header: headerString,
        body: bodyRowStrings
    });

    if (markerRegex)
        tableString = tableString.replace(markerRegex, ' ');
    
    return tableString.trim();
}