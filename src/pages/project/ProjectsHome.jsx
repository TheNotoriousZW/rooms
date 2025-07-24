import FeatureIcon from "../../icons/FeatureIcon"

const data = [
    {
      "id": "p001",
      "name": "AI Customer Support Assistant",
      "description": "An AI-powered chatbot to handle customer service inquiries and automate responses using NLP.",
      "date": "2025-06-01",
      "deadline": "2025-08-15",
      "principals": ["Alice Kim", "Ravi Patel"],
      "status": "active",
      "progress": 65,
      "createdBy": "Alice Kim",
      "updatedAt": "2025-07-20T14:23:00Z"
    },
    {
      "id": "p002",
      "name": "Smart Inventory Tracker",
      "description": "A real-time IoT-based inventory management system for warehouses.",
      "date": "2025-05-10",
      "deadline": "2025-10-01",
      "principals": ["Jenna Ortiz", "Kofi Mensah"],
      "status": "active",
      "progress": 45,
      "createdBy": "Kofi Mensah",
      "updatedAt": "2025-07-18T10:12:00Z"
    },
    {
      "id": "p003",
      "name": "E-Learning Analytics Platform",
      "description": "A web platform that tracks student engagement and performance across online courses.",
      "date": "2025-04-20",
      "deadline": "2025-09-20",
      "principals": ["Emily Zhao"],
      "status": "planning",
      "progress": 10,
      "createdBy": "Emily Zhao",
      "updatedAt": "2025-07-10T08:00:00Z"
    },
    {
      "id": "p004",
      "name": "Fleet Management System",
      "description": "A dashboard for monitoring and optimizing delivery fleets using GPS and traffic data.",
      "date": "2025-03-05",
      "deadline": "2025-07-30",
      "principals": ["Tariq Al-Mansur", "Veronica Li"],
      "status": "completed",
      "progress": 100,
      "createdBy": "Tariq Al-Mansur",
      "updatedAt": "2025-07-01T16:45:00Z"
    },
    {
      "id": "p005",
      "name": "Personal Finance AI Coach",
      "description": "A mobile app that analyzes spending habits and provides personalized financial advice.",
      "date": "2025-06-15",
      "deadline": "2025-09-30",
      "principals": ["Carlos Rivera", "Maya Thompson"],
      "status": "active",
      "progress": 33,
      "createdBy": "Carlos Rivera",
      "updatedAt": "2025-07-22T12:30:00Z"
    }
  ]
  
export default function ProjectsHome(){
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
            <div className="border">
                projects list
            </div>
        </div>
    )
}