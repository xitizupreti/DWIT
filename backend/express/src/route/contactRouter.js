import { Router } from "express";
import {
  createContact,
  deleteContact,
  readAllContact,
  readContactById,
  updateContact,
} from "../controllers/contactController.js";

export let contactRouter = Router();

contactRouter.route("/").post(createContact).get(readAllContact);

contactRouter
  .route("/:id")
  .get(readContactById)
  .patch(updateContact)
  .delete(deleteContact);
