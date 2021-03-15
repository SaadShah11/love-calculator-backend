
const express = require('express');
const loveCalculator = require('../controllers/loveCalculator')

const router = express.Router();

//router.get('/displayLove', loveCalculator.getLove)
router.post('/calculateLove', loveCalculator.calculateLove)//, dashboard.createPost)

module.exports = router;