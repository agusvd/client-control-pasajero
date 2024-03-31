import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import { Link } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'


const FormTrabajador = () => {
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
                        <Link to='/panel/personal' className='p-1 hover:bg-gray-200 transition-colors flex items-center rounded-md'>
                            <LuArrowLeft className='text-[#0A0A0B]' size={30} />
                        </Link>
                    </div>
                    <p className='text-zinc-400'>Rellena el Formulario para agregar a un nuevo Trabajador</p>
                </div>
                <div className='flex justify-center pt-5'>
                    <form className='w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Nombre Completo</label>
                                <input type='text' placeholder='Nombre Completo...' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Direccion</label>
                                <input type='text' placeholder='Direccion...' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Telefono</label>
                                <input type='text' placeholder='912341234' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Transporte</label>
                                <select className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'>
                                    <option value='VAN'>VAN</option>
                                    <option value='TAXI'>TAXI</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Tipo de Empresa</label>
                                <select className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'>
                                    <option value='EST'>EST</option>
                                    <option value='TP'>TP</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Estado</label>
                                <select className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'>
                                    <option value='true'>Activo</option>
                                    <option value='false'>Inactivo</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Viaje Ida</label>
                                <select className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'>
                                    <option value='true'>Si</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[#0A0A0B]'>Viaje Vuelta</label>
                                <select className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'>
                                    <option value='true'>Si</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>
                        </div>
                        <button className='bg-[#FF5757] text-white p-2 rounded-md sm:w-1/2'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormTrabajador