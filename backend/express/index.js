import Express, { json } from "express";
import firstRouter from "./src/route/firstRouter.js";
import traineesRouter from "./src/route/traineesRouter.js";
import { connect } from "mongoose";
import { connectToMongodb } from "./src/connect/connectToMongodb.js";
import { studentRouter } from "./src/route/studentRouter.js";

let expressApp = Express();
expressApp.use(json());
connectToMongodb();
expressApp.get("/", function (req, res) {
  res.send("Test on local");
});

//Application MiddleWare
expressApp.use((req, res, next) => {
  console.log("Application Middleware");
  next();
});
//Router MiddleWare
expressApp.use("/bike", firstRouter);
expressApp.use("/traineesRouter", traineesRouter);
expressApp.use("/students", studentRouter);

expressApp.listen(8000, () => {
  console.log("done");
});
