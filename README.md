# Live Bookings Viewer
📌 Overview The Live Bookings Viewer is a real-time web application designed for venue administrators to monitor incoming bookings instantly. This full-stack application demonstrates real-time data flow between server and client using Socket.IO, with a clean, responsive interface for optimal user experience.

# 🛠️ Technology Stack
## Backend
- Node.js with Express framework

- Socket.IO for real-time bidirectional communication

- In-memory array for booking data storage

## Frontend
- Vanilla JavaScript (no frameworks)

- Semantic HTML5

- Modern CSS with variables and Grid layout

- Socket.IO client library

## Installation
1. Clone the repository
2. Install dependencies: ``` npm install express socket.io ```
4. Run the server: ``` node server.js ```
5. Open your browser at http://localhost:3000

## 🔍 How It Works
- The Node.js server generates mock booking data every 5 seconds

- Using Socket.IO, the server broadcasts new bookings to all connected clients

- The frontend listens for these events and dynamically updates the UI

- New bookings appear at the top of the list in real-time

- All connected clients stays in sync
