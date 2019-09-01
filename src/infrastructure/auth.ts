import * as jwt from 'jsonwebtoken';
import Config from "./config"

class Auth {
    validate (req, res, next) {
        var token = req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, Config.secret, function(err, decoded) {
                if (err) {
                    return res.status(403).send({
                        success: false, 
                        message: '403 - Token inválido'
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.status(401).send({
                success: false, 
                message: '401 - Usuário não autorizado'
            });
        }
    }

}

export default new Auth;