// routes/staycation.routes.js
const express = require('express');
const router = express.Router();
const StaycationModel = require('../model/staycationmodel');
const staycationController = require('../controllers/staycationcontroller');

// Route to create a new staycation
router.post('/', staycationController.createStaycation);

// Route to insert data into MongoDB
router.post('/insertData', async (req, res) => {
  const newData = req.body;

  try {
    // Use insertMany to insert new documents without updating existing ones
    const result = await StaycationModel.insertMany(newData);
    res.json(result);
  } catch (error) {
    console.error('Error during data insertion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from MongoDB
router.get('/fetchData', staycationController.getStaycation);

module.exports = router;
