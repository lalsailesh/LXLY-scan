import express from "express";
import {
  getRecentTransactions,
  getTransactionFromTxHash,
  getTransactionFromAddress,
} from "../controllers/transcations.js";

const router = express.Router();

router.get("/recent/transactions", getRecentTransactions);

router.get("/transaction/txHash/:txHash", getTransactionFromTxHash);

router.get("/transaction/address/:address", getTransactionFromAddress);

export default router;
