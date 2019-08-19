import * as express from "express";
import { Route } from "./routes/route";
import ApplicationContext from "./infrastructure/applicationContext";

class App {
    public app: express.Application;
    public routes: Route;
    private context: ApplicationContext;

  constructor() {
      this.app = express();
      this.routes = new Route();
      this.context = new ApplicationContext();
      this.context.createConnection();
      this.routes.routes(this.app);
  }
}

export default new App();
