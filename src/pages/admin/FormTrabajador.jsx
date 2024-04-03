import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'
import { toast, Toaster } from 'react-hot-toast'
import NavBar from '../../components/NavBar'


const FormTrabajador = () => {

    const [values, setValues] = useState({
        nombre_completo: '',
        direccion: '',
        telefono: '',
        transporte: '',
        tipo_empresa: '',
        estado: '',
        viaja_ida: '',
        viaja_vuelta: '',
    })


    const [vehiculos, setVehiculos] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/dashboard/vehiculos')
            .then((res) => {
                setVehiculos(res.data)
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response
                    if (status === 401) {
                        toast.error(data.message || 'No autorizado')
                    } else {
                        toast.error('Error desconocido')
                    }
                }
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/dashboard/trabajadores', { ...values })
            .then((res) => {
                toast.success(res.data.message)
                setTimeout(() => {
                    navigate('/panel/personal')
                }, 1500)
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response
                    if (status === 400) {
                        toast.error(data.message || 'Error al agregar el trabajador')
                    } else {
                        toast.error('Error de red')
                    }
                }
            })
    }


    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Toaster />
            <NavBar />
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
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Nombre Completo</label>
                                <input type='text' name='nombre_completo' placeholder='Nombre Completo...' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, nombre_completo: e.target.value })}
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Direccion</label>
                                <input type='text' name='direccion' placeholder='Direccion...' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, direccion: e.target.value })}
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Telefono</label>
                                <input type='text' name='telefono' placeholder='912341234' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, telefono: e.target.value })}
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Transporte</label>
                                <select name='transporte' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, transporte: e.target.value })}
                                >
                                    <option value=''>Selecciona un Vehiculo</option>
                                    {vehiculos.map((vehiculo) => (
                                        <option key={vehiculo.id_vehiculo} value={vehiculo.nombre}>{vehiculo.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Tipo de Empresa</label>
                                <select name='tipo_empresa' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, tipo_empresa: e.target.value })}
                                >
                                    <option value=''>Selecciona un Tipo de Empresa</option>
                                    <option value='EST'>EST</option>
                                    <option value='TP'>TP</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Estado</label>
                                <select name='estado' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, estado: e.target.value })}
                                >
                                    <option value=''>Selecciona un Estado</option>
                                    <option value='activo'>Activo</option>
                                    <option value='inactivo'>Inactivo</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Viaje Ida</label>
                                <select name='viaje_ida' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, viaja_ida: e.target.value })}
                                >
                                    <option value=''>Selecciona</option>
                                    <option value='si'>Si</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[#0A0A0B]'>Viaje Vuelta</label>
                                <select name='viaje_vuelta' className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                    onChange={(e) => setValues({ ...values, viaja_vuelta: e.target.value })}
                                >
                                    <option value=''>Selecciona</option>
                                    <option value='si'>Si</option>
                                    <option value='no'>No</option>
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