import { Link } from "react-router-dom";

function Main() {
    return (
        <header>
            <h2>Answers for all questions</h2>
            <button><Link to="/answers">Answers</Link></button>
        </header>
    )
}

export default Main;