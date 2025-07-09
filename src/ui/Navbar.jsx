import UsersIcon from '../icons/UsersIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import MessagesIcon from '../icons/MessagesIcon';
import ActionIcon from '../icons/ActionIcon';
import { useState } from 'react';
import FeatureIcon from '../icons/FeatureIcon';

export default function Navbar() {
    

    const [navOpen, setNavOpen] = useState(false);

    const handleNavOnMouseEnter = () => {
        setNavOpen(true);
    }

    const handleNavOnMouseLeave = () => {
        setNavOpen(false);
    }

    return(
           <div 
           onMouseEnter={handleNavOnMouseEnter} 
           onMouseLeave={handleNavOnMouseLeave} 
           className="flex flex-col fixed top-12 border-r min-h-screen border-stone-200 items-center bg-white  w-8 hover:w-30">
             <div className="flex flex-col top-12 border-b-2 items-center border-stone-300 space-y-4 py-8 w-full px-2 ">
                <FeatureIcon navOpen={navOpen} lable="teams" nav={navOpen} path="/teams" navbaricon={true}>
                    <UsersIcon />
                </FeatureIcon>

               <FeatureIcon navOpen={navOpen} lable="projects" nav={navOpen} path="/projects" navbaricon={true}>
                    <ProjectsIcon />
               </FeatureIcon>
            
                <FeatureIcon navOpen={navOpen} lable="messages" nav={navOpen} path="/messages" navbaricon={true}>
                    <MessagesIcon   />
                </FeatureIcon>
            
                <FeatureIcon navOpen={navOpen} lable="actions" nav={navOpen} path="/actions" navbaricon={true}>
                    <ActionIcon />
                </FeatureIcon>
           </div> 
       </div>
    )
}