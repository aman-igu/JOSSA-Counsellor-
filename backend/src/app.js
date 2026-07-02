const express = require("express");
const pool = require("./config/DB");
const cors = require("cors");
const predictorRoutes = require("./routes/predictor_routes");
const collegeRoutes = require("./routes/college_routes");
const choicefillingRoutes = require("./routes/choice-filling_routes");


const app = express();

app.use(cors());

app.use("/api", collegeRoutes);
app.use("/api", predictorRoutes);
app.use("/api", choicefillingRoutes);


module.exports = app;