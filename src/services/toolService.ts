import ToolRepository from "../repositories/toolRepository";

class ToolService {

    getAll() {
        return ToolRepository.find({});
    }

    getByTag(tag: String) {
        return ToolRepository.find({ tags: tag })
    }

    insert(tool){
        return ToolRepository.create(tool);
    }

    delete(id){
        return ToolRepository.findByIdAndRemove(id);
    }
}

export default new ToolService();