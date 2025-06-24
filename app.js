require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
app.use(express.json());

// PostgreSQL
const pgPool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'Perpustakaan',
  password: 'admin123',
  port: 5432
});

// MongoDB
mongoose.connect('mongodb://localhost:27017/campus', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Redis
const redisClient = redis.createClient({ url: 'redis://localhost:6379' });
redisClient.connect();

app.get('/', (req, res) => {
  res.send('Perpustakaan API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
