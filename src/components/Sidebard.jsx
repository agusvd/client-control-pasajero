import { useContext, createContext, useState, useEffect } from "react"
import { LuArrowRightFromLine, LuArrowLeftFromLine, LuMoreVertical, LuLogOut } from "react-icons/lu";
import Logo from "../assets/logo_colour.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';
import { jwtDecode } from "jwt-decode";

const SidebarContext = createContext()

export default function Sidebar({ children }) {

    const [expanded, setExpanded] = useState(true)
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState('')
    axios.defaults.withCredentials = true;

    // obtener informacion del usuario por id
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token)
        const id_usuario = decoded.id_usuario
        axios
            .get(`http://localhost:3000/api/user/users/${id_usuario}`)
            .then((res) => {
                setUsuario(res.data[0].usuario)
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 401) {
                        toast.error(data.message || 'No autorizado');
                    } else {
                        toast.error('Error desconocido');
                    }
                }
            });
    })

    // logout
    const handleLogout = (e) => {
        e.preventDefault()
        axios
            .get('http://localhost:3000/api/auth/logout')
            .then((res) => {
                localStorage.removeItem('token');
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 401) {
                        toast.error(data.message || 'No autorizado');
                    } else {
                        toast.error('Error desconocido');
                    }
                }
            });
    };
    return (
        <aside className="h-screen">
            <Toaster />
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src={Logo} className={`overflow-hidden transition-all ${expanded ? "w-44" : "w-0"}`} alt="methanex logo" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-black">
                        {expanded ? <LuArrowLeftFromLine size={20} /> : <LuArrowRightFromLine size={20} />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img src="https://ui-avatars.com/api/?name=Agustin+Villarroel" alt="Admin logo" className="w-10 h-10 rounded-md" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-light text-black first-letter:uppercase">{usuario}</h4>
                        </div>
                        <button onClick={handleLogout} className="text-black">
                            <LuLogOut size={20} />
                        </button>
                    </div>
                </div>

            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active, alert, link }) {
    const { expanded } = useContext(SidebarContext)
    const location = useLocation(); // Obtiene la ubicación actual

    const isActive = location.pathname === link;

    return (
        <Link to={link} className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${isActive ? 'bg-gray-200' : 'hover:bg-indigo-50 text-gray-600'}
        ${active ? "bg-[#37B9D8] text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                {text}
            </span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-[#37B9D8] ${expanded ? "" : "top-2"}`} />)}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#37B9D8] text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </Link>
    )
}