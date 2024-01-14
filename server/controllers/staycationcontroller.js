// controllers/staycation.controller.js
const StaycationModel = require('../model/staycationmodel');
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateJwt");

// Controller to create a new staycation
exports.createStaycation = async (req, res) => {
  try {
    const { title, location, imageSrc, price, description, available } = req.body;

    // Create a new staycation object
    const newStaycation = new StaycationModel({
      title,
      location,
      imageSrc,
      price,
      description,
      available,
    });

    // Save the staycation to the database
    const savedStaycation = await newStaycation.save();

    if (savedStaycation) {
      res.status(201).json({
        _id: savedStaycation._id,
        title: savedStaycation.title,
        location: savedStaycation.location,
        imageSrc: savedStaycation.imageSrc,
        price: savedStaycation.price,
        description: savedStaycation.description,
        available: savedStaycation.available,
        token: generateToken(savedStaycation._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid staycation data");
    }
  } catch (error) {
    console.error('Error creating staycation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get staycation data
exports.getStaycation = asyncHandler(async (req, res) => {
  try {
    const staycations = await StaycationModel.find();
    res.status(200).json(staycations);
  } catch (error) {
    console.error('Error getting staycations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})