import * as express from "express";
import { Route } from "./routes/route";
import ApplicationContext from "./infrastructure/applicationContext";
import * as BodyParser from "body-parser";

class App {
    public app: express.Application;
    public routes: Route;
    private context: ApplicationContext;
    private bodyParser;

  constructor() {
      this.app = express();
      this.routes = new Route();
      this.context = new ApplicationContext();
      this.context.createConnection();
      this.middler();
      this.routes.routes(this.app);
  }

  middler() {
    this.app.use(BodyParser.json());
    this.app.use(this.bodyParser.urlencoded({extend: false}));
  }

}

export default new App();
