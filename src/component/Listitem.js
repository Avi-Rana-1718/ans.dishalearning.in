import { Link } from "react-router-dom";

function Listitem(props) {
    return (
        <li className="list-none font-['Epilogue'] m-1.5 p-2 rounded shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] hover:underline">
         <Link to={props.url}>
        <span dangerouslySetInnerHTML={{__html: props.title}}></span>
           <i class="fa-solid fa-up-right-from-square m-1.5 text-[#0D6EFD]"></i></Link>
        </li>
    )
}

export default Listitem;