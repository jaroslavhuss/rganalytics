import { Schema, model } from "mongoose";
import { DataModleInterface } from "../../interface/DataModelInterface";

const DataSchema = new Schema<DataModleInterface>(
  {
    host: { type: String },
    pathname: { type: String },
    hostname: { type: String },
    href: { type: String },
    search: { type: String },
    ancestorOrigins: {
      type: Object,
    },
    origin: { type: String },
    protocol: { type: String },
    port: { type: String },
    hash: { type: String },
  },
  { timestamps: true }
);

export const DataModel = model("visit", DataSchema);
