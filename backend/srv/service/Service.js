const validators = require('./validators');
const errors = require('../utils/errors');

module.exports = class Service {
    constructor(objectModel = null, validatorName = null) {
        this.errors = require('../utils/errors');
        this.model = objectModel;
        this.validatorName = validatorName;
    };

    async readAll(client) {
        return await this.model.readAll(client);
    }

    async read(client, id) {
        let result = await this.model.read(client, id);

        if (result != null) {
            return result;
        } else {
            throw this.errors.notFound;
        }
    }

    async create(client, data) {
        if ((await validators.check(this.validatorName, data)).error) {
            throw this.errors.wrongCredentials;
        } else {
            return await this.model.create(client, data);
        }
    }

    async update(client, id, data) {
        if ((await validators.check(this.validatorName, data)).error) {
            throw errors.invalidId;
        } else {
            return await this.model.update(client, params, data);
        }
    }

    async delete(client, id) {
        return await this.model.delete(client, id);
    }
};