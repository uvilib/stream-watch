const express = require('express');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const server = http.createServer(app);
const config = require('./config');

const { Server } = require('socket.io');

const io = new Server(server, {
    maxHttpBufferSize: 1e5,
    cors: {
        methods: ['GET', 'POST'],
    },
});

app.use(cors());
app.options('*', cors());
app.use(cookieParser());

app.use(express.json({ limit: '50mb', type: 'application/json' }));

io.on('connection', (socket) => {
    socket.on('joinTheRoom', (roomId) => {
        socket.join(roomId);
        io.to(roomId).emit('joinedSuccess', { roomId, id: socket.id });
    });
});

const PORT = process.env.PORT || config.port;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
