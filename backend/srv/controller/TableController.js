class TableController extends require('./Controller') {
    constructor() {
        super(new (require('../service/'))());
        this.readProp = this.readProp.bind(this);
        this.routers['/readProp'] = [{method: 'post', cb: this.readProp}];
        this.registerRouters();
    };

    async readProp(req, res) {
        res.json(await this.service.readProp(req.body))
    };
}

module.exports = () => {
    const controller = new TableController();

    return controller.router;


};