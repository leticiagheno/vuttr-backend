"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class ApplicationContext {
    constructor() {
        this.dbUrl = "mongodb://localhost:27017/db_vuttr";
    }
    createConnection() {
        mongoose.connect(this.dbUrl);
    }
}
exports.default = ApplicationContext;
