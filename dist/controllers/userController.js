"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
const HttpStatus = require("http-status");
const util_1 = require("../utils/util");
class UserController {
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            var userOnDb = yield userService_1.default.verifyUser(user);
            if (userOnDb === null) {
                util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");
            }
            else if (userOnDb.get("senha") !== user.senha) {
                util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");
            }
            else if (userOnDb.get("senha") === user.senha) {
                var token = userService_1.default.createToken(user);
                util_1.default.sendResponse(res, HttpStatus.OK, token);
            }
            else {
                util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao logar");
            }
        });
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            var userOnDb = yield userService_1.default.verifyUser(user);
            console.log(userOnDb);
            if (userOnDb === null) {
                userService_1.default.saveUser(user);
                util_1.default.sendResponse(res, HttpStatus.CREATED, "Ok");
            }
            else if (userOnDb !== null) {
                util_1.default.sendResponse(res, HttpStatus.CONFLICT, "Usuário já existente.");
            }
            else {
                util_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, "Erro ao criar usuário");
            }
        });
    }
}
exports.default = new UserController();
