import Header from "./Header"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { useNav } from "../context/NavProvider"


export default function AppLayout() {
    const {navOpen, setNavOpen} = useNav();

    const handleNavOnMouseEnter = () => {
        setNavOpen(true);
    }

    const handleNavOnMouseLeave = () => {
        setNavOpen(false);
    }

    return (
        <div className="grid grid-cols-1 transition-all duration-300 sm:m-6 md:m-0
        sm:space-y-6 md:space-y-0">
            <div className="col-span-1 border-b border-stone-300">
               <Header />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-30  ">
              <div className={` md:h-screen ${navOpen ? "col-span-4" : "col-span-1"} `}
                onMouseEnter={() => handleNavOnMouseEnter()} 
                onMouseLeave={() => handleNavOnMouseLeave()} >
                  <Navbar />
              </div>
               <div className={` md:h-screen ${navOpen ? "col-span-26" : "col-span-29"}`}>
                  <Outlet />
              </div>
            </div>
        </div>
    )
}