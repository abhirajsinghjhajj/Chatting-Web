# 💬 Real-Time Chat App

A simple real-time web-based chat application using **Node.js**, **Express**, and **Socket.IO**. It allows users to join the chat with a username, send messages in real-time, and see the list of online users.

---

## 🚀 Features

- Join the chat with a custom username
- Real-time message exchange using WebSockets
- See who is online (user list updates dynamically)
- System messages when users join or leave
- Simple and clean UI with responsive layout

---

## 🖼️ Preview

![Chat App Screenshot](preview.png) <!-- Add your own screenshot in the repo as preview.png -->

---

## 📁 Project Structure
```
chat-app/
├── public/
│ ├── index.html # Frontend HTML + JS
├── server.js # Node.js server with Socket.IO
├── package.json
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **WebSocket**: Socket.IO

---

## ⚙️ Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   
2. **Install dependencies**
   npm install
   
3. **Run the server**
   node server.js
   
4. **Open in browser**
   http://localhost:3000

## 👥 How It Works

- When a user enters a username and joins, the server stores their socket ID and username.
- Messages are sent to all connected users in real-time.
- The online user list updates dynamically when users join or leave.
- Messages from the system (e.g., "User joined") appear with a different style.
