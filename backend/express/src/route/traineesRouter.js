import { Router } from "express";
let traineesRouter = Router();

traineesRouter
  .route("/")
  .post((req, res, next) => {
    res.json({ success: true, message: "post traine" });
  })
  .get((req, res, next) => {
    res.json({ success: true, message: "get traine" });
  })
  .delete((req, res, next) => {
    res.json({ success: true, message: "del traine" });
  });

export default traineesRouter;
