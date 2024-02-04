import { Router } from "express";
import {
  uploadMultipleFile,
  uploadSingleFile,
} from "../controllers/fileController.js";
import upload from "../utils/fileUpload.js";

export let fileRouter = Router();
fileRouter.route("/single").post(upload.single("profile"), uploadSingleFile);
fileRouter.route("/multiple").post(upload.array("profile"), uploadMultipleFile);
