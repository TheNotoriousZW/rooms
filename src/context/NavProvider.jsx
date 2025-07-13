import { createContext, useState, useContext } from "react"

const NavContext = createContext();

export default function NavProvider({children}) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <NavContext.Provider value={{navOpen, setNavOpen}}>
            {children}
        </NavContext.Provider>
    )
}

function useNav(){
    const context = useContext(NavContext);
    if(!context){
        throw new Error("useNav must be used within a NavProvider");
    }
    return context;
}

export {NavContext, NavProvider, useNav}