const predictor_Service = require("../services/predictor_service");

const predict = async (req, res) => {
    try {
        const rank = parseInt(req.query.rank);
        const quota = req.query.quota;
        const seatType = req.query.seatType;
        const gender = req.query.gender;
        const type = req.query.type;

        const branches = req.query.branches
            ? req.query.branches.split(",")
            : [];

        if (!req.query.rank || isNaN(rank) || !quota || !seatType || !gender || !type ) {
            return res.status(400).json({ error: "Missing or invalid required parameters" });
        }

        const result = await predictor_Service.predictCollege(rank, quota, seatType, gender, type, branches);
        res.json(result);
    }   
        catch (error) {
        console.error("Error predicting college:", error);
        res.status(500).json({ error: "Failed to predict college" });
     }
};

module.exports = { predict };