const validators = require('./validators');
const errors = require('../utils/errors');
const dbClass = require('../utils/dbClass');
const Service = require('./Service');
const PaperModel = require('../db-entity/TableModel');

module.exports = class TableService extends Service {
    constructor(model = new TableModel(), validatorName = 'paper') {
        // Incorrect processing of JetBrains hints. Maybe need change my local object's name???
        // noinspection JSCheckFunctionSignatures
        super(model, validatorName);
        this.errors = require('../utils/errors');
    };
};