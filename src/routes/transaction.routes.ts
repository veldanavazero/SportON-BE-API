import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";

import {
  createTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
} from "../controllers/transaction.controller";
import multer from "multer";

const upload = multer();

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, upload.none(), updateTransaction);

export default router;