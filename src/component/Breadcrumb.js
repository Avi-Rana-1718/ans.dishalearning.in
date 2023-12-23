import { Link } from "react-router-dom";

function Breadcrumb() {
    return(
        <>
        <small className="font-['Epilogue'] m-1 text-sm"><Link to="/"><i class="fa-solid fa-house text-[#0D6EFD] m-1"></i></Link><i class="fa-solid fa-chevron-right m-1"></i><Link className="text-[#0D6EFD] hover:underline" to="/answers">Answers</Link></small>
        </>
    )
}

export default Breadcrumb;