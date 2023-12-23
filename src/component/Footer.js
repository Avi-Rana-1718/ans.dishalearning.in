function Footer() {
    return (
        <footer className="bg-[#F2F6FC] max-w-full p-3 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] flex font-['Epilogue']">
            <div className="flex items-center justify-around">
            <img className="w-12 m-1" src="/logo.png" alt="logo"></img>
        <h3>Disha Learning</h3>
            </div>
            <div className="flex justify-end w-full text-sm m-4">

                <ul className="p-2">
                    <li className="font-medium underline">Products</li>
                    <li className="hover:underline"><a href="https://dishalearning.in">Main website</a></li>
                </ul>

                <ul className="p-2">
                    <li className="font-medium underline">Resources</li>
                    <li className="hover:underline"><a href="https://dishalearning.in">About</a></li>
                    <li className="hover:underline"><a href="https://dishalearning.in">Support</a></li>
                    <li className="hover:underline"><a href="https://dishalearning.in">Terms</a></li>
                    <li className="hover:underline"><a href="https://dishalearning.in">Privacy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;