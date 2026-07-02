const express = require('express');
const router = express.Router();
const pool = require("../config/DB");

router.get('/colleges', async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT COUNT(DISTINCT Institute) FROM cutoffs GROUP BY TYPE");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching colleges:", error);
        res.status(500).json({ error: "Failed to fetch college data" });
    }
});

module.exports = router;
