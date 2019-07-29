const dbClass = require('../utils/dbClass');

module.exports = class Model {
    constructor(tableName = ``, tableKeyName = ``, data = {}, dataFieldNames = []) {
        this.tableName = tableName;
        this.tableKeyName = tableKeyName;
        this.dataFieldNames = dataFieldNames;
        this.errors = require('../utils/errors');
    };

    // For reuse of
    _fillAttrClass(data) {
        for (let iterator in this) {
            // noinspection JSUnfilteredForInLoop
            if (this.hasOwnProperty(iterator)
                && data.hasOwnProperty(iterator)
                && typeof this[iterator] !== "function") {
                // noinspection JSUnfilteredForInLoop
                this[iterator] = data[iterator];
            }
        }
    }

    _getValuesByKeyNames(names) {
        let result = [];
        for (let iterator in names) {
            // noinspection JSUnfilteredForInLoop
            if (this.hasOwnProperty(iterator)) {
                // noinspection JSUnfilteredForInLoop
                result.push(this[iterator]);
            }
        }
        return result;
    }

    _formUpdateStatement(data = this) {
        let result = [];
        for (let iterator in Object.keys(data)) {
            if (iterator !== this.tableKeyName) {
                result.push(`${iterator} = ${data[iterator]}, `);
            }
        }
        return result;
    }

    async create(client, data) {
        if (data === undefined) {
            return await new dbClass(client).executeUpdate(
                `INSERT INTO ${this.tableName}(${this.dataFieldNames}) VALUES(${super._getValuesByKeyNames(this.dataFieldNames)});`, []);
        } else {
            return await new dbClass(client).executeUpdate(
                `INSERT INTO ${this.tableName}(${Object.keys(data)}) VALUES(${Object.values(data)}});`, []);
        }
    };

    async update(client, modelObjectKey = this[this.tableKeyName], data) {
        if (data === undefined) {
            return await new dbClass(client).executeUpdate(
                `UPDATE ${this.tableName}  
                    SET ${this._formUpdateStatement(this.dataFieldNames)}
                    WHERE ${this.tableKeyName} = ${modelObjectKey}`,
                []);
        } else {
            return await new dbClass(client).executeUpdate(
                `UPDATE ${this.tableName}  
                    SET ${this._formUpdateStatement(data)}
                    WHERE ${this.tableKeyName} = ${modelObjectKey}`,
                []);
        }
    };

    async delete(client, modelObjectKey = this[this.tableKeyName]) {
        return await new dbClass(client).executeUpdate(
            `DELETE FROM ${this.tableName} WHERE ${this.tableKeyName} = ?`, [modelObjectKey]);
    };

    async readAll(client) {
        return await new dbClass(client).executeUpdate(`SELECT * FROM ${this.tableName}`, []);
    };

    async read(client, modelObjectKey = this[this.tableKeyName]) {
        return await new dbClass(client).executeUpdate(
            `SELECT * FROM ${this.tableName} WHERE ${this.tableKeyName} = ?`, [modelObjectKey]);
    };
};
