const express = require("express");

const {
  createOrder,
  getMyOrders,
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// CREATE ORDER
// ==========================================

router.post(
  "/",
  authMiddleware,
  createOrder
);

// ==========================================
// GET MY ORDERS
// ==========================================

router.get(
  "/my-orders",
  authMiddleware,
  getMyOrders
);

module.exports = router;