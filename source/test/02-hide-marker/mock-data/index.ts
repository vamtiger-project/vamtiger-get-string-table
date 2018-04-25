const columnPrefix = 'Column';
const valuePrefix = 'Value';
const columnSize = 3

export default {
    header: new Array(columnSize)
        .fill(undefined)
        .map((column, index) => `${columnPrefix} ${index + 1}`),
    body: new Array(columnSize)
        .fill(undefined)
        .map(row => new Array(columnSize).fill(undefined).map((column, index) => `${valuePrefix} ${index+ 1}`)),
    hideMarker: true
};

export const expected = `                                
  Column 1   Column 2   Column 3  
                                  
  Value 1    Value 2    Value 3   
                                  
  Value 1    Value 2    Value 3   
                                  
  Value 1    Value 2    Value 3   
`.trim()