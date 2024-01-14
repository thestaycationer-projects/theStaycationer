const mongoose = require('mongoose');

const staycationSchema = new mongoose.Schema({
  //id: { type: String, unique: true },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: [String], // 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  available: {
    type: [String],
  },
});

const StaycationModel = mongoose.model('Staycation', staycationSchema);

module.exports = StaycationModel;
