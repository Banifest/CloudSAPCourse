class CacheService
{
    constructor()
    {
        const LRU = require('lru-cache');
        this.logger = require('../service/Logger');
        this.options =
            {
                max: 50000,
                maxAge: 30000
            };
        this.cache = new LRU(this.options);
    }

    async set(req, data)
    {
        this.cache.set(req.originalUrl, data, 30000);
    }

    async get(req)
    {
        console.log(this.cache.dump());
        let cached_data = await this.cache.get(req.originalUrl);
        if (cached_data)
        {
            this.logger.info(`FROM CACHE ${cached_data}`);
        }
        return cached_data;
    }

    async invalidate(req)
    {

    }
}

const cache = new CacheService();

module.exports = cache;