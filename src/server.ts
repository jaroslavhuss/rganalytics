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
  app.post("/api/analytics/page-visit/", async (req, res) => {
    await DataModel.create(req.body);
    res.status(200).send("ok");
  });
  app.post("/api/analytics/link-clicked/", async (req, res) => {
    await ClickedModel.create(req.body);
    res.status(200).send("ok");
  });
  app.post("/api/analytics/get/page/visit/data", async (req, res) => {
    const data = await DataModel.find({});
    return res.status(200).json(data);
  });
  app.post("/api/analytics/get/links/clicked/data", async (req, res) => {
    const data = await ClickedModel.find({});
    return res.status(200).json(data);
  });
  app.get("/", (req, res) => {
    res.status(200).send("It works");
  });
  app.listen(5001, () => {
    console.log("Server is listening");
  });
};

Main();
