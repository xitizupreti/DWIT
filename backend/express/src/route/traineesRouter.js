import { Router } from "express";
let traineesRouter = Router();

traineesRouter
  .route("/")
  .post((req, res, next) => {
    res.json({ success: true, message: "post trainee" });
  })
  .get(
    (req, res, next) => {
      // res.json({ success: true, message: "get trainee 1" });
      console.log("1 next");
      next();
    },
    (req, res, next) => {
      res.json({ success: true, message: "get trainee 2" });
      console.log("2 next");
    }
  )
  .delete((req, res, next) => {
    res.json({ success: true, message: "del trainee" });
  });

export default traineesRouter;
