// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'YOUR_MONGODB_ATLAS_CONNECTION_STRING';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
};

module.exports = connectDB;
