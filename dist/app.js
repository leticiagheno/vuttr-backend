"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const route_1 = require("./routes/route");
const applicationContext_1 = require("./infrastructure/applicationContext");
const BodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.routes = new route_1.Route();
        this.context = new applicationContext_1.default();
        this.context.createConnection();
        this.middler();
        this.routes.routes(this.app);
    }
    middler() {
        this.app.use(BodyParser.json());
        this.app.use(this.bodyParser.urlencoded({ extend: false }));
    }
}
exports.default = new App();
