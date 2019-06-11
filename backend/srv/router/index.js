"use strict";

const bodyParser = require("body-parser");

module.exports = (app, server) =>
{
    //add db config

    app.use(bodyParser.json());
    app.use('/api', require('../controller/api')());
};
