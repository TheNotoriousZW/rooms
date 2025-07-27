import { useNavigate, useLocation } from 'react-router-dom';



export default function FeatureIcon({ children, lable, nav, path, navbaricon}){
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;


    return(
        <div 
        onClick={() => navigate(path)}
        className={`flex flex-row transition-ease-in-out 
            duration-200 ${navbaricon ? "active:bg-stone-300" : ""} text-stone-500 
            space-x-2  ${navbaricon ? "hover:bg-stone-100 rounded-sm p-2" : ""}
            ${navbaricon ? "hover:bg-stone-100 rounded-sm p-2" : ""}
            ${pathname === path && navbaricon ? "rounded-sm" : ""}  
            p-2 ${pathname === path && navbaricon ? 'bg-stone-200' : ''}
            ${pathname === path && navbaricon ? 'font-bold text-stone-900' : ''}`}>
                {children}
                {nav && <p>{lable}</p>} 
        </div>
    )
}