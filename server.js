require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const connectDb = require('./src/db/db');

const PORT = process.env.PORT || 3000;

// connect DB
connectDb();

// create http server and setup socket.io
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });

// make io available to request handlers/controllers
app.set('io', io);

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);
  socket.on('disconnect', () => console.log('Socket disconnected:', socket.id));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
