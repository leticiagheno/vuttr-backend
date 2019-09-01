import ToolRepository from "../repositories/toolRepository";

class ToolService {

    getAll() {
        return ToolRepository.find({});
    }

    getByTag(tag: String) {
        var searchByTag = ToolRepository.find({ tags: tag });
        return searchByTag;
    }

    getGlobal(global: String) {
        var searchGlobal = ToolRepository.find({ $text: { $search: global }}, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        });

        return searchGlobal;
    }

    insert(tool){
        return ToolRepository.create(tool);
    }

    delete(id){
        return ToolRepository.findByIdAndRemove(id);
    }
}

export default new ToolService();