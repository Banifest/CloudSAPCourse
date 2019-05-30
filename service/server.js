/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

const xsjs = require("@sap/xsjs");
const xsenv = require("@sap/xsenv");
const port = process.env.PORT || 3000;

let options = {
    anonymous: true, // remove to authenticate calls
    redirectUrl: "/index.xsjs"
};

// configure HANA
try {
    options = Object.assign(options, xsenv.getServices({hana: {tag: "hana"}}));
} catch (err) {
    console.log("[ERROR]", err.message);
}

// configure UAA.  Our uaa is pt_uaa
try {
    options = Object.assign(options, xsenv.getServices({uaa: "pt_uaa"}));
} catch (err) {
    console.log("[ERROR]", err.message);
}

// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);
