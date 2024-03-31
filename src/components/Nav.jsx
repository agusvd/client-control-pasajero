import { useContext, createContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-dark.svg";
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';
import { jwtDecode } from "jwt-decode";

const NavContext = createContext();

export default function Nav({ children }) {

    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate()

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
        <nav className="flex gap-2 bg-[#0A0A0B] p-2 w-full border-b border-[#27272A]">
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
                            <img src={`https://ui-avatars.com/api/?name=${usuario}`} alt="profile" className="w-10 rounded-full" />
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#0A0A0B] gap-2 border border-[#27272A]">
                            <div className="border-b border-[#27272A] p-1">
                                <h4 className="font-light text-[#FAFAFA] first-letter:uppercase">{usuario}</h4>
                            </div>
                            <Link className="text-[#FAFAFA] p-1 hover:bg-[#27272A] rounded-md transition-colors">Pefil</Link>
                            <Link
                                onClick={handleLogout}
                                className="text-[#FAFAFA] p-1 hover:bg-[#27272A] rounded-md transition-colors">Cerrar sesion</Link>
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
            className={`p-2 duration-300 ease-in-out transition-all ${isActive ? 'text-[#FAFAFA]' : 'hover:text-[#FAFAFA] text-[#27272A]'}`}>
            {text}
        </Link>
    )
}