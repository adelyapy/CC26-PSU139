const express = require('express');
const router = express.Router();
const analyzeHandler = require('../handlers/analyzeHandler');

router.post('/analyze', analyzeHandler.analyzeCV);

module.exports = router;