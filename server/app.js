// server/app.js

import express from 'express';
import db from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
