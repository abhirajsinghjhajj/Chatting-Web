// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store active users
let users = new Map();

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('New user connected');

    // Add user to chat
    socket.on('joinChat', (username) => {
        users.set(socket.id, username);
        io.emit('updateUsers', Array.from(users.values()));
        socket.broadcast.emit('message', {
            user: 'System',
            text: `${username} joined the chat`,
            time: new Date().toLocaleTimeString()
        });
    });

    // Handle messages
    socket.on('sendMessage', (message) => {
        const user = users.get(socket.id);
        io.emit('message', {
            user: user,
            text: message,
            time: new Date().toLocaleTimeString()
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        const username = users.get(socket.id);
        users.delete(socket.id);
        io.emit('updateUsers', Array.from(users.values()));
        socket.broadcast.emit('message', {
            user: 'System',
            text: `${username} left the chat`,
            time: new Date().toLocaleTimeString()
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
