function Footer() {
    return (
        <footer className="bg-white max-w-full p-3 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] flex font-['Epilogue']">
            <div className="flex items-center">
            <img className="w-12 m-1" src="/logo.png" alt="logo"></img>
        <h3>Disha Learning</h3>
            </div>
            <div className=" flex text-sm m-4">

                <ul className="p-2">
                    <li className="font-medium underline">Products</li>
                    <li><a href="https://dishalearning.in">Main website</a></li>
                </ul>

                <ul className="p-2">
                    <li className="font-medium underline">Resources</li>
                    <li><a href="https://dishalearning.in">Main website</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;