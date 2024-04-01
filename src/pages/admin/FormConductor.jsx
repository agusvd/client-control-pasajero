import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import { Link, useNavigate } from 'react-router-dom'
import { LuArrowBigLeft, LuArrowLeft, LuArrowLeftCircle } from 'react-icons/lu'
import { toast, Toaster } from 'react-hot-toast'

const FormConductor = () => {
    const navigate = useNavigate()
    // variables de estado
    const [vehiculos, setVehiculos] = useState([])

    const [values, setValues] = useState({
        nombre_completo: '',
        usuario: '',
        password: '',
        telefono: '',
        id_vehiculo: ''
    })

    //obtener vehiculos
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

    //funcion para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/auth/register/conductor', { ...values })
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
                        toast.error(data.message || 'Error al agregar el conductor')
                    } else {
                        toast.error('Error de red')
                    }
                }
            })
    }


    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Toaster />
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
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Nombre Completo</label>
                            <input type='text' name='nombre_completo' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            onChange={e => setValues({ ...values, nombre_completo: e.target.value })} 
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Usuario</label>
                            <input type='text' name='usuario' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]' 
                                onChange={e => setValues({ ...values, usuario: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Contraseña</label>
                            <input type='password' name='password' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]' 
                                onChange={e => setValues({ ...values, password: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Telefono</label>
                            <input type='text' name='telefono' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]' 
                            onChange={e => setValues({ ...values, telefono: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Vehiculo</label>
                            <select type='text' name='vehiculo' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]' onChange={e => setValues({ ...values, id_vehiculo: e.target.value })}>
                                <option value=''>Seleccionar</option>
                                {vehiculos.map((vehiculo) => (
                                    <option key={vehiculo.id_vehiculo} value={vehiculo.id_vehiculo}>{vehiculo.nombre}</option>
                                ))}
                            </select>
                        </div>
                        
                        <button className='bg-[#FF5757] text-white p-2 rounded-md w-1/2'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormConductor