import Header from "./Header"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function AppLayout() {

    return(
        <>
            <div className="flex flex-col fixed min-h-screen">
                <Header />
                <div className="flex flex-col w-full ">
                    <Outlet />      
                    <Navbar />
                </div>
            </div>
        </>
    )
}