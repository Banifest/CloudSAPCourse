using Cell from './Cell';

type uuid : String(32);

entity Table {
    key guid : uuid;
    name : String(100);
    description: String(200);
    quantityRow: Integer;
    quantityColumn: Integer;

    createdOn: Timestamp;
    createdBy: String(10);
    toCell : association to many Cell on toCell.guid = guid;
};