module.exports = async (req, res, next) =>
{

    if (req.method === "GET")
    {
        const cached = await require('../service/Cache').get(req);
        if (cached)
        {
            const Logger = require('../service/Logger');
            Logger.info(`FROM CACHE`);
            res.json(cached);
            return;
        }
    }
    next();
};