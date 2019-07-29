class PaperController extends require('./Controller') {
    constructor() {
        super(new (require('../service/PaperService'))());
        this.registerRouters();
    };
}

module.exports = () => {
    const controller = new PaperController();
    return controller.router;
};