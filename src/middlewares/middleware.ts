import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import baseController from '../controllers/base.controller';
import Config from '../config/config';

class Middleware {

    public checkToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        //if (token !== undefined) {
        //    token = token.toString();
        //    if (token.startsWith('Bearer ')) {
        //        token = token.slice(7, token.length);
        //    }
        //    token = token.split("/")[1];
        //}
        if (token) {
            token = token.toString().replace('Bearer ', '');
            jwt.verify(token, Config.secret, (err, decoded) => {
                if (err) {
                    //console.log("TOKEN EXPIRADO");
                    baseController.baseResponse.status = 400;
                    baseController.baseResponse.msg = "Usuário expirou, faça login novamente.";
                    baseController.send(res, baseController.baseResponse);

                } else {
                    //console.log("TOKEN VALIDADO");
                    const token = jwt.sign({ username: 'Admin' },
                        Config.secret,
                        {
                            expiresIn: '24h' // expires in 24 hours
                        }
                    );
                    //req.decoded = decoded;
                    //req.token = token;
                    next();
                }
            });
        } else {
            //console.log("USUARIO NÃO AUTENTICADO");
            baseController.baseResponse.status = 400;
            baseController.baseResponse.msg = "Usuário não autenticado, faça login novamente.";
            baseController.send(res, baseController.baseResponse);
        }
    }
}

export default new Middleware();
