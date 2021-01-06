import * as crypto from 'crypto';
import * as algorithm from 'sha256';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import baseController from './base.controller';
import Login from './auth.interface';

class AuthController {
    public login = (req, res) => {
        const userData: Login = req.body;
        const token = this.generateToken(userData.email);
        const output = baseController.baseResponse;
        output.token = token;
        output.status = 200;
        output.msg = "Logado com sucesso";
        output.data = null;
        baseController.send(res, output);
    }
    private encrypt = (password, secret) => {
        const hash = crypto.createHmac(algorithm, secret)
            .update(password)
            .digest('hex');
        return hash;
    };
    private generateToken = (username) => {
        return jwt.sign({ username: username },
            config.secret,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
    };
}

export default new AuthController();