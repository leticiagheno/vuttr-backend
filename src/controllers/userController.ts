import UserService from "../services/userService";
import * as HttpStatus from "http-status";
import Util from "../utils/util";

class UserController {

    async signin(req, res) {
        let user = req.body;

        var userOnDb = await UserService.verifyUser(user);
        
        if (userOnDb === null) {
            Util.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");
        } 
        else if (userOnDb.get("senha") !== user.senha) {
            Util.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");
        } 
        else if (userOnDb.get("senha") === user.senha) {
            var token = UserService.createToken(user);
            Util.sendResponse(res, HttpStatus.OK, token);
        } 
        else {
            Util.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");           
        }
    }

    async signup(req, res) {
        let user = req.body;

        var userOnDb = await UserService.verifyUser(user);
        
        console.log(userOnDb);

        if (userOnDb === null) {
            UserService.saveUser(user);
            Util.sendResponse(res, HttpStatus.CREATED, "Ok");
        } 
        else if (userOnDb !== null) {
            Util.sendResponse(res, HttpStatus.CONFLICT, "Usuário já existente.");
        } 
        else {
            Util.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao criar usuário");
        }
    }


}

export default new UserController();