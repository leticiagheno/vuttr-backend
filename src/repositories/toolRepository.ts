import * as mongoose from "mongoose";
import toolSchema from "../models/toolSchema";

export default mongoose.model("tools", toolSchema);