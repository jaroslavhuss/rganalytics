import { Schema, model } from "mongoose";
import { ClickModleInterface } from "../../interface/ClicksModelInterface";

const DataSchema = new Schema<ClickModleInterface>(
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
    clicked: { type: String },
  },
  { timestamps: true }
);

export const ClickedModel = model("clicks", DataSchema);
