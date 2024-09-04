import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import testinRouter from './routes/testinRouter';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Use the routes
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the test route!" });
});

app.use('/api', testinRouter)
app.use('/api', userRoutes);

export default app;
