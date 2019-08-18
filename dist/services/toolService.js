"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolRepository_1 = require("../repositories/toolRepository");
class ToolService {
    getAll() {
        return toolRepository_1.default.find({});
    }
    getByTag(tag) {
        return toolRepository_1.default.find({ tags: [tag] });
    }
    insert(tool) {
        return toolRepository_1.default.create(tool);
    }
    delete(id) {
        return toolRepository_1.default.deleteOne(id);
    }
}
exports.default = new ToolService();
