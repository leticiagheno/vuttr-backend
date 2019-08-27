"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolRepository_1 = require("../repositories/toolRepository");
class ToolService {
    getAll() {
        return toolRepository_1.default.find({});
    }
    getByTag(tag) {
        return toolRepository_1.default.find({ tags: tag });
    }
    getGlobal(global) {
        var tags = toolRepository_1.default.find({ $or: [{ tags: global }] });
        return tags;
    }
    insert(tool) {
        return toolRepository_1.default.create(tool);
    }
    delete(id) {
        return toolRepository_1.default.findByIdAndRemove(id);
    }
}
exports.default = new ToolService();
