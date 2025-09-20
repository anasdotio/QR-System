# 🍽️ QR Menu API

A modern **QR Menu and Ordering System** built with **Node.js**, **Express**, and **MongoDB**. This RESTful API provides comprehensive functionality for managing restaurant menus, processing orders, and handling administrative operations.

---

## ✨ Features

- 📋 **Menu Management** - Add, update, and delete menu items
- 🛒 **Customer Ordering** - Browse menu and place orders seamlessly  
- 👨‍💼 **Admin Operations** - View and manage order statuses
- 🔌 **RESTful Design** - Ready for frontend or mobile app integration
- ⚡ **Real-time Updates** - Efficient order processing and status tracking

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repo-url>
cd qr-menu-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://<your-db-uri>
```

### 4. Run the Server
```bash
npm run dev
```

🌐 **API Server**: `http://localhost:5000`

---

## 📡 API Documentation

### 🏥 Health Check

#### Check API Status
```http
GET /
```

**Response:**
```json
"QR Menu API running"
```

---

### 🍕 Menu Management APIs

#### 1. Get All Menu Items
```http
GET /api/menu
```

**Response:**
```json
[
  {
    "_id": "64f1b2...",
    "name": "Burger",
    "price": 120,
    "category": "Fast Food"
  }
]
```

#### 2. Add New Menu Item
```http
POST /api/menu
```

**Request Body:**
```json
{
  "name": "Pizza",
  "price": 250,
  "category": "Italian"
}
```

**Response:**
```json
{
  "message": "Menu item created successfully",
  "menu": {
    "_id": "64f1b2...",
    "name": "Pizza",
    "price": 250,
    "category": "Italian"
  }
}
```

#### 3. Update Menu Item
```http
PUT /api/menu/:id
```

**Request Body:**
```json
{
  "price": 300
}
```

**Response:**
```json
{
  "message": "Menu item updated",
  "menu": {
    "_id": "64f1b2...",
    "name": "Pizza",
    "price": 300,
    "category": "Italian"
  }
}
```

#### 4. Delete Menu Item
```http
DELETE /api/menu/:id
```

**Response:**
```json
{
  "message": "Menu item deleted"
}
```

---

### 🛍️ Order Management APIs

#### 1. Create New Order
```http
POST /api/orders
```

**Request Body:**
```json
{
  "table": "T1",
  "items": [
    {
      "name": "Burger",
      "qty": 2,
      "price": 120
    },
    {
      "name": "Coke",
      "qty": 1,
      "price": 50
    }
  ]
}
```

**Response:**
```json
{
  "message": "Order placed successfully",
  "order": {
    "_id": "64f1c3...",
    "table": "T1",
    "items": [
      {
        "name": "Burger",
        "qty": 2,
        "price": 120
      },
      {
        "name": "Coke",
        "qty": 1,
        "price": 50
      }
    ],
    "status": "pending"
  }
}
```

---

### 👨‍💼 Admin APIs

#### 1. Get All Orders
```http
GET /api/admin/orders
```

**Response:**
```json
[
  {
    "_id": "64f1c3...",
    "table": "T1",
    "items": [
      {
        "name": "Burger",
        "qty": 2,
        "price": 120
      }
    ],
    "status": "pending"
  }
]
```

#### 2. Update Order Status
```http
PUT /api/admin/orders/:id
```

**Request Body:**
```json
{
  "status": "completed"
}
```

**Response:**
```json
{
  "message": "Order status updated",
  "order": {
    "_id": "64f1c3...",
    "status": "completed"
  }
}
```

---

## 📋 API Routes Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/api/menu` | Get all menu items |
| `POST` | `/api/menu` | Add new menu item |
| `PUT` | `/api/menu/:id` | Update menu item |
| `DELETE` | `/api/menu/:id` | Delete menu item |
| `POST` | `/api/orders` | Create new order |
| `GET` | `/api/admin/orders` | Get all orders (admin) |
| `PUT` | `/api/admin/orders/:id` | Update order status |

---

## 🔧 Tech Stack

| Category | Technology |
|----------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Utilities** | CORS, dotenv |

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

**Happy Coding! 🚀**