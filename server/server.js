// server.js (entry point)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect('mongodb://localhost:27017/yourDB')
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch((err) => console.error(err));
