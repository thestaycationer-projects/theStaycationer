// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const staycationRoutes = require('./routes/staycationroutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
mongoose.connect('mongodb+srv://thestay:stay2024@cluster0.71iwonv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());

app.use(bodyParser.json());

// Use the staycation routes
app.use('/api/staycation', staycationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
