"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const route_1 = require("./routes/route");
class App {
    constructor() {
        this.routes = new route_1.Route();
        this.app = express();
        this.routes.routes(this.app);
    }
}
exports.default = new App();
