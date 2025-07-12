import FeatureIcon from "../icons/FeatureIcon"
export default function Actions(){

    const actions = [
        {
            id: 1,
            name: "dq framework",
            description: "Description 1",
            status: "Pending",
            assignedTo: "John Doe",
            dueDate: "2025-01-01",
            createdAt: "2025-01-01",
            updatedAt: "2025-01-01",
            createdBy: "John Doe",
            updatedBy: "John Doe",
            projectId: 1,
            projectName: "Project 1",
        },
        {
            id: 2,
            name: "build a new feature",
            description: "Description 2",
            status: "Pending",
            assignedTo: "Jane Doe",
            dueDate: "2025-01-01",
            createdAt: "2025-01-01",    
            updatedAt: "2025-01-01",
            createdBy: "Jane Doe",
            updatedBy: "Jane Doe",
            projectId: 2,
            projectName: "Project 2",
        },
        
    ]
    return(
      <div className="flex flex-row items-center  relative">
        <div className="flex flex-col items-center absolute border rounded-md p-4 border-stone-300 ">
            <div>
            <p>User Work</p>
            </div>
        </div>
        <div className="flex flex-col items-center absolute left-80 text-stone-500">
            <div className="flex items-center justify-center border rounded-lg sm:p-6 border-stone-200">
               <ul>
                {actions.map(action => {
                    return(
                        <li key={action.id} className="flex flex border-2 
                        border-blue-400 font-medium text-stone-500  bg-blue-300 shadow-lg rounded-md space-x-4 m-6">
                            <div className="flex p-2 w-120 items-center justify-between">
                            <div className="flex items-center space-x-2">
                            <FeatureIcon lable="action" path="/actions">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
                                  </svg>
                                </FeatureIcon>
                                {action.name}</div>
                                <div className="flex flex-row items-center justify-between pr-3">
                                    <p>details</p>
                                    <FeatureIcon lable="action" path="/actions">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                       <path fillRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 2.75ZM2 6.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 2 9.75ZM14.78 11.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V6.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                     </svg>
                                    </FeatureIcon>
                                    </div>
                                
                            </div>
                        </li>
                    )
                })}
               </ul>
           </div>
        </div>
    </div>
    )
}