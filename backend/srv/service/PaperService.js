const validators = require('./validators');
const errors = require('../utils/errors');
const dbClass = require('../utils/dbClass');
const Service = require('./Service');

module.exports = class PaperService extends Service {
    constructor(model = null, validatorName = null) {
        // Incorrect processing of JetBrains hints
        // noinspection JSCheckFunctionSignatures
        super(model, validatorName);
        this.errors = require('../utils/errors');
        this.model = model;
        this.validatorName = validatorName;
    };

    async readAll(client) {

        return await new dbClass(client).executeUpdate(`SELECT * FROM paper`, ["Paper"]);
        //return await this.model.findAll();
    }

    async readById(id) {
        if (!isNaN(id) && (await this.model.findById(Number(id))) != null) {
            return await (await this.model.findById(Number(id))).get({plain: true});
        } else {
            throw this.errors.notFound;
        }
    }

    async create(data) {
        if ((await validators.check(this.validatorName, data)).error) {
            throw this.errors.wrongCredentials;
        } else {
            return await this.model.create(data);
        }
    }

    async updateById(id, data) {
        if ((await validators.check(this.validatorName, data)).error) {
            throw errors.invalidId;
        } else {
            await this.model.update(data, {where: {id: id}});
            return this.readById(id);
        }
    }

    async deleteById(id) {
        return await this.model.destroy({where: {id: id}});
    }
};