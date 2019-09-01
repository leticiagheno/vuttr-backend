import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    }, 
    senha: {
        type: String
    }
});

export default userSchema;