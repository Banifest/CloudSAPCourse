class TableController extends require('./Controller') {
    constructor() {
        super(new (require('../service/'))());
        this.registerRouters();
    };
}

module.exports = () => {
    const controller = new TableController();

    return controller.router;


};