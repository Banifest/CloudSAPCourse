using Paper from './Paper';
using Table from './Table';
using uuid from './Table';

entity Cell {
    key guid: uuid;
    value: String(20);
    row: Integer;
    column: Integer;
    color: Integer;

    createdOn: Timestamp;
    createdBy: String(10);
    toPaper: Association to one Paper on toPaper.name = value;
    toTable: Association to many Table on toTable.guid = guid;
};