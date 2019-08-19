import ToolController from "../controllers/toolController";

class Route { 
    routes(app: any){
        app.route('/').get((req,res) => {
            res.send({ versao : '0.0.1'})
        })

        //GetAll and GetByTag
        app.route('/tools').get(ToolController.get);
        //Create new tool
        app.route('/tools').post(ToolController.insert);
        //Delete tool
        app.route('/tools/:id').delete(ToolController.delete);
    }
}

export { Route };