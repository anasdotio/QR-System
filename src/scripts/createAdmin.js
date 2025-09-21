const { config } = require('dotenv');
config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');

const create = async () => {
  try {
    // Only connect if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.MONGO_URI ||
          'mongodb+srv://anasdevcode_db_user:AnAsKhAn2003@qrcluster.jirq5fl.mongodb.net/qr-system?retryWrites=true&w=majority&appName=QRCLUSTER',
      );
      console.log('✅ Connected to MongoDB');
    }

    const username = 'owner';
    const plainPassword = 'admin123'; // 🚨 Change this after creation!
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const exists = await Admin.findOne({ username });
    if (exists) {
      console.log('⚠️ Admin already exists. Skipping creation.');
    } else {
      await Admin.create({ username, password: hashedPassword, role: 'admin' });
      console.log(
        `✅ Admin created: username = "${username}", password = "${plainPassword}"`,
      );
    }

    await mongoose.disconnect(); // ✅ Good practice
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating admin:', err);
    await mongoose.disconnect(); // ensure disconnect on error too
    process.exit(1);
  }
};

create();
