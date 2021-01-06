import baseController from './base.controller';
import Teste from './teste.interface';

class TesteController {

    public show = (req, res) => {
        console.log("get");
        const json = { "Retorno teste": "poa ksjd koasmkd masdm oasmdko m" };
        baseController.baseResponse.status = 200;
        baseController.baseResponse.msg = "Usuários atualizado com sucesso.";
        baseController.baseResponse.data = json;
        baseController.send(res, baseController.baseResponse);
    }
    public create = (req, res) => {
        console.log("post");
        const post: Teste = req.body;
        baseController.baseResponse.status = 200;
        baseController.baseResponse.msg = "Usuários atualizado com sucesso.";
        baseController.baseResponse.data = post;
        baseController.send(res, baseController.baseResponse);
    }
    public update = (req, res) => {
        console.log("update");
        baseController.baseResponse.status = 200;
        baseController.baseResponse.msg = "Usuários atualizado com sucesso.";
        baseController.baseResponse.data = { "content": "teste" };
        baseController.send(res, baseController.baseResponse);
    }
    public delete = (req, res) => {
        console.log("delete");
        baseController.baseResponse.status = 200;
        baseController.baseResponse.msg = "Usuários deletados com sucesso.";
        baseController.baseResponse.data = { "content": "teste" };
        baseController.send(res, baseController.baseResponse);
    }
}

export default new TesteController();