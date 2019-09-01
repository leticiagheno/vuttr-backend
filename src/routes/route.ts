import ToolController from "../controllers/toolController";

import Auth from "../infrastructure/auth";
import userController from "../controllers/userController";

class Route { 
    routes(app: any) {

        app.route('/signin').post(userController.signin);
        app.route('/signup').post(userController.signup);
        
        app.route('/').get((req,res) => {
            res.send({ versao : '0.0.1'})
        })

        app.use(Auth.validate);

        //GetAll, GetByTag and GetByName
        app.route('/tools').get(ToolController.get);
        //Create new tool
        app.route('/tools').post(ToolController.insert);
        //Delete tool
        app.route('/tools/:id').delete(ToolController.delete);
    }
}

export { Route };