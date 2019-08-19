import * as mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
    title: {
        type: String
    },
    link: {
        type: String
    }, 
    description: {
        type: String
    },
    tags: {
        type: [String]
    }
});

export default toolSchema;