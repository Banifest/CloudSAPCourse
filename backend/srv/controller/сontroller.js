const express = require('express');
const wrap = require('../helpers/wrap');

module.exports = class Controller
{
    constructor(service)
    {
        this.service = service;
        this.cache = require('../service/Cache');
        this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.paramRead = this.paramRead.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        this.router = express.Router();
        this.routers = {
            '/': [{method: 'get', cb: this.readAll}],
            '/:id': [{method: 'get', cb: this.read}],
            '/paramRead': [{method: 'post', cb: this.paramRead}],
            '/create': [{method: 'post', cb: this.create}],
            '/update': [{method: 'post', cb: this.update}],
            '/delete': [{method: 'post', cb: this.delete}]
        }
    }

    async readAll(req, res)
    {
        let answer = await this.service.readAll();
        // Ignore promise, because function doesn't return any data and should do in async mode
        // noinspection JSIgnoredPromiseFromCall
        this.cache.set(req, answer);
        res.json(answer);
    };

    async read(req, res)
    {
        let answer = await this.service.readById(req.params.id);
        // Ignore promise, because function doesn't return any data and should do in async mode
        // noinspection JSIgnoredPromiseFromCall
        this.cache.set(req, answer);
        res.json(answer);
    };

    async create(req, res)
    {
        res.json(await this.service.create(req.body));
    };

    async update(req, res)
    {
        let id = req.body.id;
        delete req.body.id;
        res.json(await this.service.updateById(id, req.body));
    };

    async delete(req, res)
    {
        res.json(await this.service.deleteById(req.body.id));
    };

    registerRouters()
    {
        Object.keys(this.routers).forEach(route =>
        {
            let handlers = this.routers[route];

            if (!handlers || !Array.isArray(handlers))
            {
                return;
            }
            for (let handler of handlers)
            {
                this.router[handler.method](route, wrap(handler.cb));
            }
        });
    };
};