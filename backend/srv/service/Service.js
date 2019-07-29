const validators = require('./validators');
const errors = require('../utils/errors');

module.exports = class Service
{
    constructor(model = null, validatorName = null)
    {
        this.errors = require('../utils/errors');
        this.model = model;
        this.validatorName = validatorName;
    };

    async readAll(client)
    {
        return await this.model.readAll(client);
    }

    async read(client, id)
    {
        if (!isNaN(id) && (await this.model.read(client, Number(id))) != null)
        {
            return await (await this.model.read(client, Number(id))).get({plain: true});
        }
        else
        {
            throw this.errors.notFound;
        }
    }

    async create(data)
    {
        if ((await validators.check(this.validatorName, data)).error)
        {
            throw this.errors.wrongCredentials;
        }
        else
        {
            return await this.model.create(data);
        }
    }

    async update(client, data)
    {
        if ((await validators.check(this.validatorName, data)).error)
        {
            throw errors.invalidId;
        }
        else
        {
            await this.model.update(client, data);
            return this.read(client, id);
        }
    }

    async deleteById(client, id)
    {
        return await this.model.delete(client, id);
    }
};