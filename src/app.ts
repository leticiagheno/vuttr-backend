import * as express from "express";
import { Route } from "./routes/route";

class App {
  public app: express.Application;
  public routes: Route = new Route();

  constructor() {
      this.app = express();
      this.routes.routes(this.app);
  }
}

export default new App();
