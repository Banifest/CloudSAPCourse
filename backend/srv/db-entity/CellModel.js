const crypto = require('crypto');
const ObjectModel = require('./Model');

module.exports = class CellModel extends ObjectModel {
    constructor(data = {}) {
        super(`table`, `guid`, data,
            ["guid", "value", "row", "column", "color", "papers", "tables", "createdOn", "createdBy"]
        );
        Object.defineProperties(this, {
            guid: {
                enumerable: true,
                writable: true,
                value: crypto.randomBytes(16).toString("hex"),
            },
            value: {
                enumerable: true,
                writable: true,
                value: "",
            },
            row: {
                enumerable: true,
                writable: true,
                value: 1,
            },
            column: {
                enumerable: true,
                writable: true,
                value: 1,
            },
            color: {
                enumerable: true,
                writable: true,
                value: 0x000000,
            },
            createdOn: {
                enumerable: true,
                writable: true,
                value: Date.now(),
            },
            createdBy: {
                enumerable: true,
                writable: true,
                value: "",
            },

            papers: {
                enumerable: true,
                writable: true,
                value: [],
            },
            tables: {
                enumerable: true,
                writable: true,
                value: [],
            },
        });
    }
};
