"use strict";
exports.__esModule = true;
exports.DataModel = void 0;
var mongoose_1 = require("mongoose");
var DataSchema = new mongoose_1.Schema({
    host: { type: String },
    pathname: { type: String },
    hostname: { type: String },
    href: { type: String },
    search: { type: String },
    ancestorOrigins: {
        type: Object
    },
    origin: { type: String },
    protocol: { type: String },
    port: { type: String },
    hash: { type: String }
}, { timestamps: true });
exports.DataModel = mongoose_1.model("visit", DataSchema);
//# sourceMappingURL=visitModel.js.map