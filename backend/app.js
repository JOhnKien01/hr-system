const express = require('express');
const authRoutes = require('./middleware/auth');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.use('/api/auth', authRoutes);
app.use('/api', employeeRoutes);

const pool = require('./config/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Connection failed:', err);
  } else {
    console.log('Connected to Postgres! Server time:', res.rows[0].now);
  }
});


module.exports = app;