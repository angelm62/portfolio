import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
 
        <header className="py-4 xl:py-10 text-white "> {/* bg-pink-50/20 */}
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href= "/">
                <h1 className="text-4xl font-semibold">
                    Angel<span className="text-accent">.</span>
                </h1>
                </Link>

                {/* desktp nav  & hire me button*/}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                       <Button>Hire Me</Button>
                    </Link>
                   
                </div>
                {/* mobile nav */}
                <div className="bg-blue lg:hidden flex items-center gap-8">
                    <MobileNav />
                    
                </div>
            </div>
        </header>
    )
}

export default Header