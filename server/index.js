// // index.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const staycationRoutes = require('./routes/staycationroutes');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to the database
// mongoose.connect('mongodb+srv://thestay:stay2024@cluster0.71iwonv.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// app.use(cors());

// app.use(bodyParser.json());


// // Serve static files from the 'images' directory
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Use the staycation routes
// app.use('/api/staycation', staycationRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const razorpayRoute = require("./routes/razorpay/razorpayRoute");
const staycationRoutes = require("./routes/staycationroutes"); // 
require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://thestay:stay2024@cluster0.71iwonv.mongodb.net/?retryWrites=true&w=majority" ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'images' directory
app.use("/images", express.static(path.join(__dirname, "images")));

// Use the staycation routes
app.use("/api/staycation", staycationRoutes);

// Use the Razorpay route
app.use("/api", razorpayRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

