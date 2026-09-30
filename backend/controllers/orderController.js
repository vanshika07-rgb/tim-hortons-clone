const Order = require("../models/Order");

// ==========================================
// CREATE ORDER
// ==========================================

const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      orderType,
      deliveryAddress,
      paymentMethod,
      items,
      total,
    } = req.body;

    // Check required fields
    if (
      !customerName ||
      !customerEmail ||
      !orderType ||
      !paymentMethod ||
      !items ||
      items.length === 0 ||
      total === undefined
    ) {
      return res.status(400).json({
        message: "Please provide all required order details.",
      });
    }

    // Create order
    const order = await Order.create({
      user: req.userId,

      customerName,
      customerEmail,
      orderType,
      deliveryAddress: deliveryAddress || "",
      paymentMethod,
      items,
      total,
    });

    res.status(201).json({
      message: "Order placed successfully.",
      order: {
        id: order._id,
        orderId: `TH${order._id.toString().slice(-8).toUpperCase()}`,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        orderType: order.orderType,
        deliveryAddress: order.deliveryAddress,
        paymentMethod: order.paymentMethod,
        items: order.items,
        total: order.total,
        createdAt: order.createdAt,
      },
    });
  } catch (error) {
    console.error("Create order error:", error);

    res.status(500).json({
      message: "Unable to create order.",
    });
  }
};

// ==========================================
// GET MY ORDERS
// ==========================================

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    res.status(500).json({
      message: "Unable to fetch orders.",
    });
  }
};

// ==========================================
// EXPORT
// ==========================================

module.exports = {
  createOrder,
  getMyOrders,
};