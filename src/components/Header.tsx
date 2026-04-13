import React from 'react'
import Link from "next/link"
import NavButton from './NavButton'
import { Home, Info, Phone, Settings, Briefcase, MessageSquare, User, Ticket } from "lucide-react"
import { ModeToggle } from './ModelToggle'


function Header() {
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex justify-between items-center h-8 w-full">

                <div className="flex  items-center gap-2">
                    <NavButton label={"Home"} href={"/"} icon={Home} ></NavButton>
                    <Link href={"/home"} title="Home" className="flex items-center justify-center gap-2 ml-0">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Computer Repair Shop</h1>
                    </Link>

                </div>

                <div className="flex  items-center ">
                    <NavButton icon={Ticket} label='Ticket' href={'/tickets'}></NavButton>
                    <NavButton icon={User} label={"Login"} href={""}></NavButton>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header