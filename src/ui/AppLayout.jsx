import Header from "./Header"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
    return (
        <div className="flex relative top-0 overflow-hidden flex-col h-screen">
            <Header />
            <div className="flex flex-grow relative">
                <div className="absolute left-0 top-0 h-full z-10">
                    <Navbar />
                </div>
                <main className="flex items-center p-6 transition-all duration-300">
                    <div className="max-w-4xl">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}