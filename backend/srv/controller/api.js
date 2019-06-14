const express = require('express');
const router = express.Router();
const paperController = require('./PaperController')();
const tableController = require('./TableController')();
const cellController = require('./CellController')();

module.exports = () => {
    router.use(require('../global-contollers/cache'));
    router.use(require('../global-contollers/logger'));
    router.use(require('../global-contollers/error'));
    router.use('/paper', paperController);
    router.use('/table', tableController);
    router.use('/cell', cellController);

    return router;
};