import { useState } from "react";


export default function ProjectCard({ project }){
    
    return(
        <div className="border rounded-md p-4 grid grid-cols-1 gap-4 shadow-lg border-stone-200">
            <div key={project.id}>{project.name}</div>
            <div>leads: {project.principals.length}</div>
        </div>
    )
}
