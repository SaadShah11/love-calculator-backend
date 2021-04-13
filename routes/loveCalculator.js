
const express = require('express');
//const loveCalculator = require('../controllers/loveCalculator')
const loveCalculator = require('../controllers/calculateLove')

const router = express.Router();

//router.get('/displayLove', loveCalculator.getLove)
router.get('/calculateLove', loveCalculator.calculateLove)//, dashboard.createPost)

module.exports = router;