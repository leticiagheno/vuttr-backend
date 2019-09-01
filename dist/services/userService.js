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
const userRepository_1 = require("../repositories/userRepository");
const config_1 = require("../infrastructure/config");
const jwt = require("jsonwebtoken");
class UserService {
    saveUser(user) {
        userRepository_1.default.create(user);
    }
    verifyUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = () => {
                return userRepository_1.default.findOne({ "email": user.email }).exec();
            };
            var userOnDb = yield findUser();
            return userOnDb;
        });
    }
    createToken(user) {
        console.log(user);
        let payload = {
            iss: "Desafio bossa",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            email: user.email
        };
        var token = jwt.sign(payload, config_1.default.secret);
        return token;
    }
}
exports.default = new UserService();
