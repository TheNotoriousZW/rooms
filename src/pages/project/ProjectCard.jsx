import { useState } from "react";
import FeatureIcon from "../../icons/FeatureIcon";


export default function ProjectCard({ project }){

    
    return(
        <div className={`border rounded-md p-4 grid text-stone-900 hover:bg-stone-50 font-medium 
        grid-cols-1 gap-2 shadow-lg ${project.status === "active" ? "border-green-200" : "border-red-200"}`}>
          <div key={project.id} className="flex items-center">
            <div className="grid grid-cols-30">
                <div className="flex flex-row items-center col-span-28">
                <FeatureIcon>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                   <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z" clipRule="evenodd" />
                   <path fillRule="evenodd" d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>
                </FeatureIcon>
                {project.name}
                </div>
                <div className="text-stone-500 
                               flex flex-row 
                               items-center col-span-2">
                    <FeatureIcon>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                         <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                         </svg>
                    </FeatureIcon>
                    <p>edit</p>
                </div>
         </div>
        </div>
            <div className="pl-8 text-stone-500">
                <div>status: {project.status}</div>
                <div>branches: {project.progress}</div>
                <div className="flex items-center">leads: 
                    <FeatureIcon>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                      </svg>

                    </FeatureIcon>
                    <p className="text-stone-700">{project.principals[0]} {project.principals[1]}</p>
                </div>
               </div>
        </div>
    )
}
