const express = require('express');
const showData = require('../controllers/controller');

const router = express.Router();

router.get("/",showData);

module.exports = router;
