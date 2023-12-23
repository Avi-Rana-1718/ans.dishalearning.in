import { Link } from "react-router-dom";

function Main() {
    return (
        <header className="font-['Epilogue'] text-center p-1">
            <h2 className="font-bold text-3xl pt-3">Answers to all your questions</h2>
            <small className="text-sm block m-1">Approved answers to all questions!</small>
            <button className="bg-[#04AA6D] text-[#fff] py-2 px-4 rounded-3xl m-3 hover:underline"><Link to="/answers">Go to Answers</Link></button>
        
            <div className="bg-[#FFF3CD] text-[#664D03] text-left p-3 rounded my-5">
            <i class="fa-solid fa-triangle-exclamation text-[#664D03] mx-2"></i>
                Website is still under development!
            </div>

            <div className="px-4 py-2 my-3 rounded bg-[#f3f3f3] text-left">
            <small className="text-sm"><i class="fa-solid fa-square-up-right"></i> Head to main website</small>
            <h3 className=" text-lg hover:underline"><Link to="https://dishalearning.in">Disha Learning</Link></h3>
            <button className="bg-[#454545] text-[#fff] py-2 px-2 rounded my-3 hover:underline"><Link to="https://dishalearning.in">Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i></Link></button>
            </div>
        </header>
    )
}

export default Main;