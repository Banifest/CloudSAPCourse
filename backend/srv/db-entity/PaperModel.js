const ObjectModel = require('./Model');
const dbClass = require('../utils/dbClass');

module.exports = class PaperModel extends ObjectModel {
    constructor(data = {}) {
        super(`paper`, `name`, data, ["name", "description", "url", "createdOn", "createdBy"]);

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

        this.create = Object.bind(this.create);
        this.update = Object.bind(this.update);

        super._fillAttrClass(data);
    }
};
