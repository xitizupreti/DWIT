import { Router } from "express";
import {
  createWebUser,
  deleteWebUser,
  forgotPassword,
  loginUser,
  myProfile,
  readWebUser,
  readWebUserById,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificWebUser,
  verifyEmail,
} from "../controllers/webUserController.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
export let webUserRouter = Router();

webUserRouter.route("/").post(createWebUser).get(readWebUser);
webUserRouter.route("/verify-email").patch(verifyEmail);
webUserRouter.route("/login").post(loginUser);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forgot-password").post(forgotPassword);
webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);
webUserRouter
  .route("/:id")
  .get(readWebUserById)
  .patch(updateSpecificWebUser)
  .delete(deleteWebUser);
