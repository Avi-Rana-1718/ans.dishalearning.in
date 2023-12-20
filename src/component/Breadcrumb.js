import { Link } from "react-router-dom";
import "./Breadcrumb.css";
function Breadcrumb() {
    return(
        <>
                <small><Link to="/"><i class="fa-solid fa-house"></i></Link><i class="fa-solid fa-chevron-right"></i>Answers</small>
        </>
    )
}

export default Breadcrumb;