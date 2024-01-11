import Express from "express";
import firstRouter from "./src/route/firstRouter.js";
let expressApp = Express();

expressApp.use(firstRouter);

expressApp.listen(8000, () => {
  console.log("done");
});
