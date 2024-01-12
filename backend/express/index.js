import Express, { json } from "express";
import firstRouter from "./src/route/firstRouter.js";
import traineesRouter from "./src/route/traineesRouter.js";

let expressApp = Express();

expressApp.get("/", function (req, res) {
  res.send("Test on local");
});

//Application MiddleWare
expressApp.use((req, res, next) => {
  console.log("Application Middleware");
  next();
});
expressApp.use(json());
//Router MiddleWare
expressApp.use("/bike", firstRouter);
expressApp.use("/traineesRouter", traineesRouter);

expressApp.listen(8000, () => {
  console.log("done");
});
