const express = require("express");
const router = express.Router();
const { verifyAdmin } = require("../middleware/auth"); // JWT middleware
const Menu = require("../models/menu");
const multer = require("multer");
const { createMenuItem, getMenu } = require("../controllers/menuController");

const upload = multer({ storage: multer.memoryStorage() });


// Protected - only admin can add item
router.post("/", verifyAdmin, upload.single("itemImage"), createMenuItem);
router.get("/", getMenu);

module.exports = router;
