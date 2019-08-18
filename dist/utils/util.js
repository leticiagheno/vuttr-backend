"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    constructor() {
        this.sendResponse = function (res, status, data) {
            res.status(status).json({ result: data });
        };
    }
}
exports.default = new Util();
