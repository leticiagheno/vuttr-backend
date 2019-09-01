import UserRepository from "../repositories/userRepository";
import userSchema from "../models/userSchema";
import Config from "../infrastructure/config";
import { callbackify } from "util";
const jwt = require("jsonwebtoken");

class UserService {

    saveUser(user) {
        UserRepository.create(user);
    }

    async verifyUser(user) {

        const findUser = () => {
            return UserRepository.findOne({ "email": user.email }).exec();
        }
          
        var userOnDb = await findUser();
        
        return userOnDb;
    }
    
    createToken(user: any) {
        console.log(user);
        let payload = {
            iss: "Desafio bossa",
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            email: user.email
        };

        var token = jwt.sign(payload, Config.secret);

        return token;
    }

    

}

export default new UserService();