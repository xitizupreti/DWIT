import { Router } from "express";
import { Student } from "../schema/model.js";
export let studentRouter = Router();

studentRouter
  .route("/")
  .post((req, res, next) => {
    let data = req.body;
    let result = Student.create(data);
    res.json({ success: true, message: "Created" });
  })
  .get((req, res, next) => {
    res.json({ success: true, message: "Read All" });
  });

studentRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json({ success: true, message: "Read specific" });
  })
  .patch((req, res, next) => {
    res.json({ success: true, message: "Update" });
  })
  .delete((req, res, next) => {
    res.json({ success: true, message: "Delete" });
  });
