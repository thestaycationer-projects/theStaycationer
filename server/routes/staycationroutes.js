// routes/staycation.routes.js
const express = require('express');
const router = express.Router();
const StaycationModel = require('../model/staycationmodel');
const staycationController = require('../controllers/staycationcontroller');

// Route to create a new staycation
router.post('/', staycationController.newStaycation);

// Route to insert data into MongoDB
router.post('/insertData', async (req, res) => {
  const newData = req.body;

  try {
    const result = await StaycationModel.create(newData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from MongoDB
router.get('/fetchData', async (req, res) => {
  try {
    const data = await StaycationModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
