const express = require('express');
const router = express.Router();

const { create, list } = require('./controller.js');
router.post('/bens', create)
router.get('/bens', list)
module.exports = router