function CollegeCard({ college, category }) {

    return (

        <div className={`card ${category}`}>

            <h4>
                {college.Institute}
            </h4>

            <p>
                {college.AcademicProgramName}
            </p>

            <p>
                Opening Rank:
                {" "}
                {college.OpeningRank}
            </p>

            <p>
                Closing Rank:
                {" "}
                {college.ClosingRank}
            </p>

        </div>
    );
}

export default CollegeCard;