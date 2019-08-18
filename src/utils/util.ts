class Util {
    sendResponse = function(res, status, data){
        res.status(status).json({result: data});
    };
}

export default new Util();