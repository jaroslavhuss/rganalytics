"use strict";
exports.__esModule = true;
exports.ClickedModel = void 0;
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
    hash: { type: String },
    clicked: { type: String }
}, { timestamps: true });
exports.ClickedModel = mongoose_1.model("clicks", DataSchema);
//# sourceMappingURL=clicksModel.js.map