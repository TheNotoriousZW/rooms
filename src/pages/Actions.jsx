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

        <div className="flex flex-col w-screen  text-stone-500">
            <div className="w-full flex items-center justify-center border border-stone-200">
               <ul>
                {actions.map(action => {
                    return(
                        <li key={action.id} className="flex flex border-2 
                        border-blue-400 font-medium text-stone-500 bg-blue-300 shadow-lg rounded-md  space-x-4 m-6">
                            <div className="flex p-2 w-140 items-center ">
                                <p>{action.name}</p>
                                <FeatureIcon lable="action" path="/actions">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
                                  </svg>
                                </FeatureIcon>
                            </div>
                        </li>
                    )
                })}
               </ul>
           </div>
        </div>
    )
}