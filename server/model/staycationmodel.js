const mongoose = require('mongoose');

const staycationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
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
  amenities: {
    type: [String],
    default: [],
  },
});

const StaycationModel = mongoose.model('Staycation', staycationSchema);

module.exports = StaycationModel;
