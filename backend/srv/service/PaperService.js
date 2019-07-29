const validators = require('./validators');
const errors = require('../utils/errors');
const dbClass = require('../utils/dbClass');
const Service = require('./Service');
const PaperModel = require('../db-entity/PaperModel');

module.exports = class PaperService extends Service {
    constructor(model = new PaperModel(), validatorName = 'paper') {
        // Incorrect processing of JetBrains hints. Maybe need change my local object's name???
        // noinspection JSCheckFunctionSignatures
        super(model, validatorName);
        this.errors = require('../utils/errors');
    };
};