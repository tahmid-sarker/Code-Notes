import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingels = () => {
        setRuns(runs + 1)
    };
    const handleFours = () => {
        setRuns(runs + 4)
    };
    const handleSixes = () => {
        setRuns(runs + 6)
        setSixes(sixes + 1)
    };
    return(
        <>
        <p>Batsman Runs: {runs}</p>
        <p>Batsman Sixes: {sixes}</p>
        {
            runs > 50 && <p>You Score 50!!</p>
        }
        <button onClick={handleSingels}>Singels</button> <br />
        <button onClick={handleFours}>Fours</button> <br />
        <button onClick={handleSixes}>Sixes</button> <br />
        </>
    )
}