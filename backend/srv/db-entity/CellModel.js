const crypto = require('crypto');

module.exports = class CellModel {
    constructor() {
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
