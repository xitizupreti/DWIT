import Express, { json } from "express";
import firstRouter from "./src/route/firstRouter.js";
import traineesRouter from "./src/route/traineesRouter.js";

let expressApp = Express();

// expressApp.get("/", function (req, res) {
//   res.send("Test on local");
// });

expressApp.use(json());
expressApp.use("/bike", firstRouter);
expressApp.use("/traineesRouter", traineesRouter);

expressApp.listen(8000, () => {
  console.log("done");
});
