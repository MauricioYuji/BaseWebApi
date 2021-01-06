interface BaseResponse {
    status: number;
    msg: string;
    data: object;
    type: number;
    token: string;
}

class BaseController {
    public baseResponse: BaseResponse = { status: 0, msg: "", data: null, type: 0, token: "" };
    public send = (res, retorno) => {
        console.log("retorno.status: ", retorno.status);
        console.log("retorno.data: ", retorno.data);
        res.status(retorno.status);
        if (retorno.status === 200) {
            if (retorno.data !== null) {
                res.json({
                    success: true,
                    token: retorno.token,
                    message: retorno.msg,
                    type: retorno.type,
                    data: JSON.stringify(retorno.data)
                });
            } else {
                res.json({
                    success: true,
                    message: retorno.msg,
                    token: retorno.token,
                    type: retorno.type
                });
            }
        } else {

            res.json({
                success: false,
                type: retorno.type,
                message: retorno.msg
            });
        }
    };

}

export default new BaseController();