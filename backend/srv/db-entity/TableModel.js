module.exports = class TableModel {
    constructor() {
        Object.defineProperties(this, {
            guid: {
                enumerable: true,
                writable: true,
                value: crypto.randomBytes(16).toString("hex"),
            },
            name: {
                enumerable: true,
                writable: true,
                value: "",
            },
            description: {
                enumerable: true,
                writable: true,
                value: 1,
            },
            quantityRow: {
                enumerable: true,
                writable: true,
                value: 1,
            },
            quantityColumn: {
                enumerable: true,
                writable: true,
                value: 1,
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

            cells: {
                enumerable: true,
                writable: true,
                value: [],
            },
        });

    }
};
