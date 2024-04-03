import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo_color.svg'
import { HiBars3 } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const NavMobile = () => {

    const navigate = useNavigate()
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
            })
            .finally(() => {
                document.getElementById('menu').close(); // Cerrar el modal después de manejar el logout
            });
    };


    return (
        <div className='bg-white w-full h-16 border-b border-gray-200'>
            <Toaster />
            <div className='flex justify-between items-center h-full px-4'>
                <img src={Logo} alt='logo' className='h-full p-1' />
                <button onClick={() => document.getElementById('menu').showModal()}
                    className='text-black' >
                    <HiBars3 size={40} />
                </button>
                <dialog id="menu" className="modal">
                    <div className="modal-box bg-white font-primary w-full">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black ">✕</button>
                        </form>
                        <div className='flex justify-center items-center pb-5'>
                            <h3 className="font-bold text-3xl text-black">Menu</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <Link to="/inicio" className='bg-[#37B9D8] text-white p-2 w-full text-center rounded-xl text-2xl'>
                                Inicio
                            </Link>
                            <button onClick={handleLogout} className='bg-[#37B9D8] text-white p-2 w-full text-center rounded-xl text-2xl'>
                                Cerrar sesion
                            </button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default NavMobile