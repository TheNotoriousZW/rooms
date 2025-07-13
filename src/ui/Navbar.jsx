import UsersIcon from '../icons/UsersIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import MessagesIcon from '../icons/MessagesIcon';
import ActionIcon from '../icons/ActionIcon';
import FeatureIcon from '../icons/FeatureIcon';
import { useNav } from '../context/NavProvider';    

export default function Navbar() {
    const {navOpen} = useNav();


   

    return(
           <div 
             className="flex flex-col items-center justify-center border-b-2 border-stone-300 py-6"
           >
             <div className="flex sm:flex-col flex-row items-start justify-start gap-2">
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