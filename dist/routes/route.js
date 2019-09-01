"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolController_1 = require("../controllers/toolController");
const auth_1 = require("../infrastructure/auth");
const userController_1 = require("../controllers/userController");
class Route {
    routes(app) {
        app.route('/signin').post(userController_1.default.signin);
        app.route('/signup').post(userController_1.default.signup);
        app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        app.use(auth_1.default.validate);
        //GetAll, GetByTag and GetByName
        app.route('/tools').get(toolController_1.default.get);
        //Create new tool
        app.route('/tools').post(toolController_1.default.insert);
        //Delete tool
        app.route('/tools/:id').delete(toolController_1.default.delete);
    }
}
exports.Route = Route;
