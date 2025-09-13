require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");

const create = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/qr-system");
    const username = "owner";
    const plain = "admin123"; // change after creation!
    const hashed = await bcrypt.hash(plain, 10);

    const exists = await Admin.findOne({ username });
    if (exists) {
      console.log("Admin already exists");
      process.exit(0);
    }
   await Admin.create({ username, password: hashed, role: "admin" });

    console.log("Admin created:", username, plain);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

create();
