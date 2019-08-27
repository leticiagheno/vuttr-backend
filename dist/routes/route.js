"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolController_1 = require("../controllers/toolController");
class Route {
    routes(app) {
        app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        //GetAll, GetByTag and GetByName
        app.route('/tools').get(toolController_1.default.get);
        //Create new tool
        app.route('/tools').post(toolController_1.default.insert);
        //Delete tool
        app.route('/tools/:id').delete(toolController_1.default.delete);
    }
}
exports.Route = Route;
