const express = require('express');
const router = express.Router();
const predictorController = require("../controllers/predictorController");


router.get('/predict', predictorController.predict);


module.exports = router;