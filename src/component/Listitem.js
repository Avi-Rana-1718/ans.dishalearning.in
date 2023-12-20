import { Link } from "react-router-dom";

function Listitem(props) {
    return (
        <li><span>{props.title}</span><Link to={props.url}>Link</Link></li>
    )
}

export default Listitem;