import React, { useState } from 'react'
import Logo from '../assets/logo_color.svg'
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const NavMobile = () => {

    return (
        <div className='bg-white w-full h-16'>
            <div className='flex justify-between items-center h-full px-4'>
                <img src={Logo} alt='logo' className='h-full p-1' />
                <button onClick={() => document.getElementById('menu').showModal()}
                    className='text-black' >
                    <HiBars3 size={40} />
                </button>
                <dialog id="menu" className="modal">
                    <div className="modal-box bg-white font-primary">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black ">✕</button>
                        </form>
                        <div className='flex justify-center items-center pb-5'>
                            <h3 className="font-bold text-3xl text-black">Menu</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Link to="/inicio" className='text-black text-2xl'>
                                Lista
                            </Link>
                            <Link className='text-black text-2xl'>
                                Trabajadores
                            </Link>
                            <button className='text-black text-2xl'>
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