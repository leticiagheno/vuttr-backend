"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
    routes(app) {
        app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
    }
}
exports.Route = Route;
