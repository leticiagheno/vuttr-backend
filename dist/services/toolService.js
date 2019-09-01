"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolRepository_1 = require("../repositories/toolRepository");
class ToolService {
    getAll() {
        return toolRepository_1.default.find({});
    }
    getByTag(tag) {
        var searchByTag = toolRepository_1.default.find({ tags: tag });
        console.log(searchByTag);
        return searchByTag;
    }
    getGlobal(global) {
        var searchGlobal = toolRepository_1.default.find({ $text: { $search: global } }, function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(results);
            }
        });
        return searchGlobal;
    }
    insert(tool) {
        return toolRepository_1.default.create(tool);
    }
    delete(id) {
        return toolRepository_1.default.findByIdAndRemove(id);
    }
}
exports.default = new ToolService();
