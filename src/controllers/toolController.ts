import ToolService from "../services/toolService";
import * as HttpStatus from "http-status";
import Util from "../utils/util";

class ToolController {

    get(req, res) {
        let tag = req.params.tag;

        if (tag == null) {
            ToolService.getAll()
                .then(tools => Util.sendResponse(res, HttpStatus.OK, tools))
                .catch(error => Util.sendResponse(res, HttpStatus.BAD_REQUEST, error));
        }
        else {
            ToolService.getByTag(tag)
                .then(tools => Util.sendResponse(res, HttpStatus.OK, tools))
                .catch(error => Util.sendResponse(res, HttpStatus.BAD_REQUEST, error));
        }
    }

    insert(req, res) {
        let tool = req.body;

        ToolService.insert(tool)
            .then(tools => Util.sendResponse(res, HttpStatus.CREATED, tools))
            .catch(error => Util.sendResponse(res, HttpStatus.BAD_REQUEST, error));
    }

    delete(req, res) {
        let id = req.params.id;

        ToolService.delete(id)
            .then(tools => Util.sendResponse(res, HttpStatus.NO_CONTENT, null))
            .catch(error => Util.sendResponse(res, HttpStatus.BAD_REQUEST, error));
    }


}

export default new ToolController();