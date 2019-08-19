import * as mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
    id: {
        type: Number
    },
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