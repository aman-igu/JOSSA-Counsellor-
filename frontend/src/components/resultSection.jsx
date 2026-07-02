import CollegeCard from "./CollegeCard";

function ResultSection({ result }) {

    if (!result) {
        return null;
    }

    return (

        <div>

            <h2  className="dream-heading">
                Dream Colleges
            </h2>

            <p>
                Total: {result.dream.length}
            </p>

            {
                result.dream.map(
                    (college, index) => (
                        <CollegeCard
                            key={index}
                            college={college}
                            category="dream"
                        />
                    )
                )
            }

            <h2 className="moderate-heading">
                Moderate Colleges
            </h2>

            <p>
                Total: {result.moderate.length}
            </p>

            {
                result.moderate.map(
                    (college, index) => (
                        <CollegeCard
                            key={index}
                            college={college}
                            category="moderate"
                        />
                    )
                )
            }

            <h2 className="safe-heading">
                Safe Colleges
            </h2>

            <p>
                Total: {result.safe.length}
            </p>

            {
                result.safe.map(
                    (college, index) => (
                        <CollegeCard
                            key={index}
                            college={college}
                            category="safe"
                        />
                    )
                )
            }

        </div>
    );
}

export default ResultSection;