"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"
import { useState } from "react";
//import { useNavigate } from 'react-router-dom';

const links = [
    {
        name: "home",
        path: "/",
    },/*
    {
        name: "services",
        path: "/services",
    },*/
    {
        name: "resume",
        path: "#resume",
    },
    {
        name: "work",
        path: "#work",
    },
    {
        name: "contact",
        path: "#contact",
    },
];



const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    //const navigate = useNavigate();
  
    const closeMenu = (loc) => {
        setIsOpen(false);
        window.location.href = location;
    };
    
    return (
        <div className={`absolute ${!isOpen ? 'hidden' : ''}`}>
            
            <div className="flex justify-center items-center"
                          onClick={() => setIsOpen(true)}
            >
                    <CiMenuFries className="h-8 w-8 text-[32px] text-accent" />
            </div>
            <div className="flex flex-col">
                {/** logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Angel<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/**Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index) =>{ 
                        return(
                            <div 
                                // href={link.path}
                                key={index}
                                className={ `${
                                            link.path === pathname &&
                                            "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                                onClick={() => closeMenu(link.path)}
                                >
                                    {link.name}
                                </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;