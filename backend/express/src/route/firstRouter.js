import { Router } from "express";
let firstRouter = Router();

firstRouter
  .route("/:id/a/:name/b/:string")
  .post((req, res, next) => {
    const key = parseInt(req.query.age);
    console.log(key);
    console.log(req.params);
    console.log(req.query);
    res.json(req.body);
  })
  .get((req, res, next) => {
    res.json("get any");
  })
  .patch((req, res, next) => {
    console.log(req.body);
    res.json(req.body);
  })
  .delete((req, res, next) => {
    res.json("del any");
  });

export default firstRouter;
