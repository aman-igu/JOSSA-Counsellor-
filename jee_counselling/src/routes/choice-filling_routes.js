const express = require("express");

const router = express.Router();

const choiceFillingController =
require("../controllers/choicefillingController");

router.get(
    "/choice-filling",
    choiceFillingController.generate
);

module.exports = router;