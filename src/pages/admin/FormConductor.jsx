import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft, LuArrowLeft, LuArrowLeftCircle } from 'react-icons/lu'


const FormConductor = () => {
    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>
            <div className='p-10 h-full'>
                <div className='border-b border-gray-200 pb-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[#0A0A0B] text-4xl font-semibold text-start'>Formulario</h1>
                        <Link to='/panel/personal' className='p-1 hover:bg-gray-100 transition-colors flex items-center rounded-md'>
                            <LuArrowLeft className='text-[#0A0A0B]' size={30}/>
                        </Link>
                    </div>
                    <p className='text-zinc-400'>Rellena el Formulario para agregar a un nuevo Conductor</p>
                </div>
                <div className='flex justify-center pt-5 h-full'>
                    <form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Nombre Completo</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Usuario</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Contraseña</label>
                            <input type='password' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Telefono</label>
                            <input type='text' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Vehiculo</label>
                            <select type='text' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2'>
                                <option value='VAN'>VAN</option>
                                <option value='BUS'>BUS</option>
                            </select>
                        </div>
                        
                        <button className='bg-[#FF5757] text-[#0A0A0B] p-2 rounded-md w-1/2'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormConductor