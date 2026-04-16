import express from 'express'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  app.use(cors({
    origin:"https://localhost:3000",
  credentials:true}))
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
