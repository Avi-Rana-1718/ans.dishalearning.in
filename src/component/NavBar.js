import { Link } from "react-router-dom";

function NavBar() {
 return (
    <>
    <nav className="p-2.5 font-['Epilogue'] text-3xl font-medium">
        <Link to="/" className="flex items-center">
        <img className="w-12 m-1" src="/logo.png" alt="logo"></img>
        <h3>Disha Learning</h3>
        </Link>
    </nav>
    </>
 )
}

export default NavBar;