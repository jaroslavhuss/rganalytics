import Express from "express";
import cors from "cors";
import { Connection } from "./database/connect";
import { DataModel } from "./database/models/visitModel";
import { ClickedModel } from "./database/models/clicksModel";
const app = Express();

const Main = async () => {
  await Connection();
  app.use(cors());
  app.use(Express.json());
  app.post("/api/analytics/page-visit/", (req, res) => {
    DataModel.create(req.body);
    res.status(200);
  });
  app.post("/api/analytics/link-clicked/", (req, res) => {
    ClickedModel.create(req.body);
    res.status(200);
  });
  app.listen(5001, () => {
    console.log("Server is listening");
  });
};

Main();
