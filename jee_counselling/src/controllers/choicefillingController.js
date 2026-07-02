const predictorService =
require("../services/predictor_service");

const generate = async (req, res) => {

    try {

        const rank =
        parseInt(req.query.rank);

        const quota =
        req.query.quota;

        const seatType =
        req.query.seatType;

        const gender =
        req.query.gender;

        const type =
        req.query.type;

        const branches =
        req.query.branches
            ? req.query.branches.split(",")
            : [];

        if (
            !rank ||
            !quota ||
            !seatType ||
            !gender ||
            !type
        ) {
            return res.status(400).json({
                error:
                "Missing required parameters"
            });
        }

        const result =
        await predictorService.predictCollege(
            rank,
            quota,
            seatType,
            gender,
            type,
            branches
        );

        const allColleges = [

            ...result.dream,

            ...result.moderate,

            ...result.safe
        ];

        allColleges.sort(
            (a, b) =>
            b.finalScore -
            a.finalScore
        );

        const choices =
        allColleges.map(
            (college, index) => ({

                choiceNumber:
                index + 1,

                ...college
            })
        );

        res.status(200).json({

            totalChoices:
            choices.length,

            choices
        });

    }
    catch (error) {

        console.error(
            "Choice Filling Error:",
            error
        );

        res.status(500).json({

            error:
            "Failed to generate choice filling list"
        });
    }
    
};

module.exports = {
    generate
};