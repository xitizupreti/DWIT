import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  readStudent,
  readStudentById,
  updateStudent,
} from "../controllers/studentController.js";
export let studentRouter = Router();

studentRouter.route("/").post(createStudent).get(readStudent);

studentRouter
  .route("/:id")
  .get(readStudentById)
  .patch(updateStudent)
  .delete(deleteStudent);
