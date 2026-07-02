const pool = require("../config/DB");

const BRANCH_MAP = {
    CSE: [
        "Computer Science and Engineering"
    ],

    AI: [
        "Artificial Intelligence",
        "Artificial Intelligence and Data Science"
    ],

    IT: [
        "Information Technology"
    ],

    ECE: [
        "Electronics and Communication Engineering"
    ],

    EE: [
        "Electrical Engineering"
    ],

    ME: [
        "Mechanical Engineering"
    ],

    CE: [
        "Civil Engineering"
    ]
};

const getBranchScore = (
    branchName,
    preferences
) => {

    for(let i = 0; i < preferences.length; i++){

        const pref =
        preferences[i]
        .trim()
        .toUpperCase();

        const possibleBranches =
        BRANCH_MAP[pref];

        if(!possibleBranches)
            continue;

        const matched =
        possibleBranches.some(
            branch =>
            branchName
            .toLowerCase()
            .includes(
                branch.toLowerCase()
            )
        );

        if(matched){

            return Math.round( 100 * Math.pow(0.85, i));
        }
    }

    return 0;
};

const predictCollege = async (
    rank,
    quota,
    seatType,
    gender,
    type,
    branches
) => {

    const [rows] = await pool.query(
        `
        SELECT
            Institute,
            AcademicProgramName,
            OpeningRank,
            ClosingRank,
            Type
        FROM cutoffs
        WHERE ? >= OpeningRank
        AND ? <= ClosingRank
        AND Quota = ?
        AND SeatType = ?
        AND Gender = ?
        AND Type = ?
        ORDER BY ClosingRank ASC
        `,
        [
            rank,
            rank,
            quota,
            seatType,
            gender,
            type
        ]
    );

    const dream = [];
    const moderate = [];
    const safe = [];

    for(const college of rows){

        const rankScore =
        (
            rank /
            Math.max(
                college.ClosingRank,
                1
            )
        ) * 100;

        const branchScore =
        getBranchScore(
            college.AcademicProgramName,
            branches
        );

        const finalScore =
        (
            rankScore * 0.55
        ) +
        (
            branchScore * 0.45
        );

        const collegeData = {

            ...college,

            rankScore:
            Number(
                rankScore.toFixed(2)
            ),

            branchScore,

            finalScore:
            Number(
                finalScore.toFixed(2)
            )
        };

        if(rankScore >= 90){

            dream.push(
                collegeData
            );
        }
        else if(rankScore >= 75){

            moderate.push(
                collegeData
            );
        }
        else{

            safe.push(
                collegeData
            );
        }
    }

    dream.sort(
        (a,b)=>
        b.finalScore -
        a.finalScore
    );

    moderate.sort(
        (a,b)=>
        b.finalScore -
        a.finalScore
    );

    safe.sort(
        (a,b)=>
        b.finalScore -
        a.finalScore
    );

    return {

        dream:
        dream.slice(0,100),

        moderate:
        moderate.slice(0,100),

        safe:
        safe.slice(0,100)
    };
};

module.exports = {
    predictCollege
};