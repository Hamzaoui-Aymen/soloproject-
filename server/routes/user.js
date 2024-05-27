const express = require('express');
const router = express.Router();
const { getAllBikes,addBike,updateBike, loginUser } = require('../controller/user');

router.get('/', getAllBikes);

router.post('/post', addBike); 
router.post('/login', loginUser); 
router.put("/:id",  updateBike);

module.exports = router;