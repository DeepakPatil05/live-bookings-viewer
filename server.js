const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Array to store bookings
let bookings = [];

const generateMockBooking = () => {
  const venues = ['Common Hall', 'Garden', 'Terrace', 'Conferrence Room', 'Ocean View', 'Mountain Lodge'];
  const times = ['12:00', '13:30', '15:00', '18:00', '19:30', '21:00'];
  
  return {
    venueName: venues[Math.floor(Math.random() * venues.length)],
    partySize: Math.floor(Math.random() * 50) + 1,
    time: times[Math.floor(Math.random() * times.length)],
    date: new Date().toLocaleDateString(),
    bookingId: Date.now() + Math.floor(Math.random() * 1000)
  };
};

// Generate bookings every 5 seconds
setInterval(() => {
  const booking = generateMockBooking();
  bookings.unshift(booking);
  console.log('New booking:', booking);
  io.emit('new-booking', booking);
}, 5000);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Send all existing bookings to new client
  socket.emit('initial-bookings', bookings);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});