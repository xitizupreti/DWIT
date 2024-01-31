import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  readAllProduct,
  readProductById,
  updateProduct,
} from "../controllers/productController.js";

export let productRouter = Router();

productRouter.route("/").post(createProduct).get(readAllProduct);

productRouter
  .route("/:id")
  .get(readProductById)
  .patch(updateProduct)
  .delete(deleteProduct);
