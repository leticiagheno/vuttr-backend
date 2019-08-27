import ToolRepository from "../repositories/toolRepository";

class ToolService {

    getAll() {
        return ToolRepository.find({});
    }

    getByTag(tag: String) {
        return ToolRepository.find({ tags: tag })
    }

    getGlobal(global: String) {
        var tags = ToolRepository.find( { $or: [{ tags: global } ]} );
        return tags;
    }

    insert(tool){
        return ToolRepository.create(tool);
    }

    delete(id){
        return ToolRepository.findByIdAndRemove(id);
    }
}

export default new ToolService();