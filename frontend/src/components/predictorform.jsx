import { useState } from "react";
import ResultSection from "./resultsection";
import api from "../api/predictor_api";

function PredictorForm() {

    const [rank, setRank] = useState("");
    const [quota, setQuota] = useState("AI");
    const [seatType, setSeatType] = useState("OPEN");
    const [gender, setGender] = useState("Gender-Neutral");
    const [type, setType] = useState("NIT");
    const [branches, setBranches] = useState("CSE,AI,IT,ECE");

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePredict = async () => {

        if (!rank) {
            alert("Please enter your rank");
            return;
        }

        try {

            setLoading(true);

            const response = await api.get(
                "/predict",
                {
                    params: {
                        rank,
                        quota,
                        seatType,
                        gender,
                        type,
                        branches
                    }
                }
            );

            console.log(response.data);

            setResult(response.data);

        }
        catch (error) {

            console.log(error);

            alert("Failed to fetch colleges");
        }
        finally {

            setLoading(false);
        }
    };

    return (

        <div className="form-container">

            <h2>Predict Colleges</h2>

            <label>Rank</label>
            <br />

            <input
                type="number"
                placeholder="Enter Rank"
                value={rank}
                onChange={(e) =>
                    setRank(e.target.value)
                }
            />

            <br />
            <br />

            <label>Quota</label>
            <br />

            <select
                value={quota}
                onChange={(e) =>
                    setQuota(e.target.value)
                }
            >
                <option value="AI">AI</option>
                <option value="HS">HS</option>
                <option value="OS">OS</option>
            </select>

            <br />
            <br />

            <label>Seat Type</label>
            <br />

            <select
                value={seatType}
                onChange={(e) =>
                    setSeatType(e.target.value)
                }
            >
                <option value="OPEN">OPEN</option>
                <option value="OPEN (PwD)">OPEN (PwD)</option>

                <option value="EWS">EWS</option>
                <option value="EWS (PwD)">EWS (PwD)</option>

                <option value="OBC-NCL">OBC-NCL</option>
                <option value="OBC-NCL (PwD)">OBC-NCL (PwD)</option>

                <option value="SC">SC</option>
                <option value="SC (PwD)">SC (PwD)</option>

                <option value="ST">ST</option>
                <option value="ST (PwD)">ST (PwD)</option>
            </select>

            <br />
            <br />

            <label>Gender</label>
            <br />

            <select
                value={gender}
                onChange={(e) =>
                    setGender(e.target.value)
                }
            >
                <option value="Gender-Neutral">
                    Gender-Neutral
                </option>

                <option value="Female-only (including Supernumerary)">
                    Female-only
                </option>
            </select>

            <br />
            <br />

            <label>Institute Type</label>
            <br />

            <select
                value={type}
                onChange={(e) =>
                    setType(e.target.value)
                }
            >
                <option value="IIT">IIT</option>
                <option value="NIT">NIT</option>
                <option value="IIIT">IIIT</option>
                <option value="GFTI">GFTI</option>
            </select>

            <br />
            <br />

            <label>Branch Preference</label>
            <br />

            <input
                type="text"
                placeholder="Example: CSE,AI,IT,ECE"
                value={branches}
                onChange={(e) =>
                    setBranches(e.target.value)
                }
            />

            <br />
            <br />

           <button onClick={handlePredict}>
    {
        loading
            ? "Loading..."
            : "Predict"
    }
</button>

<br />
<br />

{result && <ResultSection result={result} />}

</div>
);
}

export default PredictorForm;