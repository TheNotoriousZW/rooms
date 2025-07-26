import { createContext, useContext } from "react";

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

const projectContext = createContext();

export default function ProjectProvider({ children }){
    return(
        <projectContext.Provider value={{ data }}>
            {children}
        </projectContext.Provider>
    )
}

function useProject(){
    const context = useContext(projectContext);
    if(!context){
        throw new Error("useProject must be used within a ProjectProvider");
    }
    return context;
}

export { useProject, ProjectProvider }