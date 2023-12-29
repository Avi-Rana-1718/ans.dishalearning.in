import Link from "next/link";

function NavBar() {
 return (
    <>
    <nav className="p-2.5 text-3xl font-medium">
        <Link href="/" className="flex items-center">
        <img className="w-12 m-1" src="/logo.png" alt="logo"></img>
        <h3>Disha Learning</h3>
        </Link>
    </nav>
    </>
 )
}

export default NavBar;