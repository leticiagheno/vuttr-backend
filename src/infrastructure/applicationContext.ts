import * as mongoose from "mongoose";

class ApplicationContext {
    private dbUrl = "mongodb://localhost:27017/db_vuttr";

    createConnection() {
        mongoose.connect(this.dbUrl);
    }
}

export default ApplicationContext;