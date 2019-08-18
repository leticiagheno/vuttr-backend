"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolService_1 = require("../services/toolService");
const HttpStatus = require("http-status");
const util_1 = require("../utils/util");
class ToolController {
    get(req, res) {
        let tag = req.params.tag;
        if (tag == null) {
            toolService_1.default.getAll()
                .then(tools => util_1.default.sendResponse(res, HttpStatus.OK, tools))
                .catch(error => util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error));
        }
        else {
            toolService_1.default.getByTag(tag)
                .then(tools => util_1.default.sendResponse(res, HttpStatus.OK, tools))
                .catch(error => util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error));
        }
    }
    insert(req, res) {
        let tool = req.body;
        toolService_1.default.insert(tool)
            .then(tools => util_1.default.sendResponse(res, HttpStatus.CREATED, tools))
            .catch(error => util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error));
    }
    delete(req, res) {
        let id = req.params.id;
        toolService_1.default.delete(id)
            .then(tools => util_1.default.sendResponse(res, HttpStatus.NO_CONTENT, null))
            .catch(error => util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error));
    }
}
exports.default = ToolController;
