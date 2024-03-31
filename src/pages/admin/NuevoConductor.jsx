import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft, LuArrowLeft, LuArrowLeftCircle } from 'react-icons/lu'


const NuevoConductor = () => {
    return (
        <div className='min-h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>
            <div className='p-10 h-full'>
                <div className='border-b border-[#27272A] pb-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-white text-4xl font-semibold text-start'>Formulario</h1>
                        <Link to='/panel/personal' className='p-1 hover:bg-[#27272A] transition-colors flex items-center rounded-md'>
                            <LuArrowLeft className='text-zinc-300' size={30}/>
                        </Link>
                    </div>
                    <p className='text-zinc-400'>Rellena el Formulario para agregar a un nuevo Conductor</p>
                </div>
                <div className='flex justify-center pt-5 h-full'>
                    <form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-zinc-300'>Nombre Completo</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-[#27272A] sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-zinc-300'>Usuario</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-[#27272A] sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-zinc-300'>Contraseña</label>
                            <input type='password' className='p-2 rounded-md bg-transparent border border-[#27272A] sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-zinc-300'>Telefono</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-[#27272A] sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-zinc-300'>Vehiculo</label>
                            <select type='text' className='p-2 rounded-md bg-transparent border border-[#27272A] sm:w-1/2'>
                                <option value='VAN'>VAN</option>
                                <option value='BUS'>BUS</option>
                            </select>
                        </div>
                        
                        <button className='bg-[#FF5757] text-white p-2 rounded-md'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NuevoConductor