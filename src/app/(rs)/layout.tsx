import Header from "@/components/Header";
import { ReactNode } from "react";


export default async function RSLayout({children}: {children: ReactNode}) {
    return (
        <div className="max-auto w-full max-w-7xl"> 
        {/* Header */}
        <Header/>
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    )
}