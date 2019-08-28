"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
toolSchema.index({ '$**': 'text' });
exports.default = toolSchema;
