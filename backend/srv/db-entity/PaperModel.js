module.exports = class PaperModel {
    constructor() {
        this.TABLE_NAME = `Paper`;
        Object.defineProperties(this, {
            name: {
                enumerable: true,
                writable: true,
                value: "",
            },
            description: {
                enumerable: true,
                writable: true,
                value: "",
            },
            url: {
                enumerable: true,
                writable: true,
                value: "//",
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
        });


        this.create = Object.bind(create);
    }

    query() {
        `SELECT * FROM ${this.TABLE_NAME}`
    }

    create() {
    };

    update() {
    };

    delete() {
    };

    read() {
    };

    readAll() {
    };
};
