"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const toolSchema_1 = require("../models/toolSchema");
exports.default = mongoose.model("tools", toolSchema_1.default);
