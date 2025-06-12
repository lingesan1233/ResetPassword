const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({
  origin: 'https://flourishing-mochi-bdbd10.netlify.app'
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));
const allowedOrigins = [
  //'https://6847394284fffc11d9715017--calm-froyo-09c0c1.netlify.app', // Netlify Preview
  'https://flourishing-mochi-bdbd10.netlify.app' // Netlify Production
];