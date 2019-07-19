const dbClass = require('../utils/dbClass');

module.exports = class Model {
    constructor() {
        this.TABLE_NAME = ``;
    };

    async queryAll(req) {
        return await dbClass(client).executeUpdate(`SELECT * FROM paper`, []);
    };

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
