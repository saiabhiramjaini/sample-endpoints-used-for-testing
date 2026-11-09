const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Dummy todo data
const todos = [
  {
    id: 1,
    title: 'Buy groceries',
    completed: false,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    title: 'Complete project',
    completed: true,
    createdAt: '2024-01-10T14:20:00Z'
  },
  {
    id: 3,
    title: 'Write documentation',
    completed: false,
    createdAt: '2024-01-18T09:15:00Z'
  },
  {
    id: 4,
    title: 'Review code',
    completed: false,
    createdAt: '2024-01-19T11:45:00Z'
  }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Todo endpoint
app.get('/api/v1/todo', (req, res) => {
  res.status(200).json({
    success: true,
    data: todos,
    count: todos.length,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Todos endpoint: http://localhost:${PORT}/api/v1/todo`);
});