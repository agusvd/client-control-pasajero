import { useContext, createContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo_color.svg";
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';
import { jwtDecode } from "jwt-decode";

const NavContext = createContext();

export default function Nav({ children }) {

    const [nombre_completo, setNombre_completo] = useState('')

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    // obtener informacion del usuario por id
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token)
        const id_admin = decoded.id_admin

        axios
            .get(`http://localhost:3000/api/user/users/admin/${id_admin}`)
            .then((res) => {
                setNombre_completo(res.data[0].nombre_completo)
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
    }, [])

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
        <nav className="flex gap-2 bg-white p-2 w-full border-b border-gray-300">
            <Toaster />
            <div className="flex gap-2 justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="methanex logo" className="w-14" />
                    <NavContext.Provider value={{}}>
                        {children}
                    </NavContext.Provider>
                </div>
                <div>
                    <div className="dropdown dropdown-bottom dropdown-end hover:bg-none">
                        <button className="p-2 rounded-lg duration-300 ease-in-out transition-all">
                            <img src={`https://ui-avatars.com/api/?name=${nombre_completo}`} alt="profile" className="w-10 rounded-full" />
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white gap-2 border border-gray-200">
                            <div className="border-b border-gray-200 p-1">
                                <h4 className="font-light text-zinc-700 first-letter:uppercase">{nombre_completo}</h4>
                            </div>
                            <Link className="text-[#0A0A0B] p-1 hover:bg-gray-100 rounded-md transition-colors">Pefil</Link>
                            <Link
                                onClick={handleLogout}
                                className="text-[#0A0A0B] p-1 hover:bg-gray-100 rounded-md transition-colors">Cerrar sesion</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export function NavItem({ link, text }) {

    const isActive = location.pathname === link;

    return (
        <Link to={link}
            className={`p-2 duration-300 ease-in-out transition-all ${isActive ? 'text-[#0A0A0B]' : 'hover:text-gray-500 text-gray-400'}`}>
            {text}
        </Link>
    )
}