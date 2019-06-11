let CryptoJS = require("crypto-js");

module.exports = {
    get: plain =>
    {
        return CryptoJS.SHA256(plain);
    },

    isValid: (plain, hash) =>
    {
        return CryptoJS.SHA256(plain) === hash;
    },
};