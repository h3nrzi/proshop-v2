import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product-controller";
import * as auth from "../middlewares/auth";
import catchAsync from "../middlewares/catchAsync";
const router = express.Router();

router.get("/", catchAsync(getAllProducts));
router.get("/:id", catchAsync(getProduct));

/////////////////// Private
router.use(catchAsync(auth.protect));

/////////////////// Admin
router.use(catchAsync(auth.admin));
router.post("/", catchAsync(createProduct));
router.patch("/:id", catchAsync(updateProduct));
router.delete("/:id", catchAsync(deleteProduct));

export default router;
