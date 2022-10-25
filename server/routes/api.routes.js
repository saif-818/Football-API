const express = require('express');
const showData = require('../controllers/controller');

const router = express.Router();

router.post("/",showData);

module.exports = router;