import FeatureIcon from "../../icons/FeatureIcon"
import ProjectCard from "./ProjectCard"
import { useProject } from "../../context/ProjectProvider"


export default function ProjectsHome(){
    const { data } = useProject();
    console.log(data);
    return(
        <div className="grid grid-cols-1 m-8 ">
            <div className=" m-8  flex flex-row items-center justify-between ">
                <h1 className="text-2xl font-medium font-sans text-stone-500">Projects</h1>
                <div className="flex flex-row items-center space-x-2">
                <input type="text" placeholder="Find Project" className="border-1 font-medium p-1 
                                                                        hover:bg-stone-100 rounded-sm  
                                                                        outline-none border-stone-200" />
                <button className="btn rounded-full flex flex-row items-center ">
                    <FeatureIcon path="/project/create" navbaricon={false}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                       <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
                     </svg>
                    </FeatureIcon>
                    Create Project
                </button>
                
                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-4">
              {data.map((project) => (
                <ProjectCard key={project.id} project={project}/>
              ))}
            </div>
        </div>
    )
}