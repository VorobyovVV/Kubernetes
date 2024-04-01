const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

// Маршрут для приема POST запроса
app.post('/api/message', (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);
  res.json({ message: `Message received: ${message}` });
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});