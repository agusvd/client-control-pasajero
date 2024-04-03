import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'
import { toast, Toaster } from 'react-hot-toast'
import NavBar from '../../components/NavBar'

const EditarTrabajador = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [vehiculos, setVehiculos] = useState([])
    const [nombre_completo, setNombreCompleto] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [transporte, setTransporte] = useState('')
    const [tipo_empresa, setTipoEmpresa] = useState('')
    const [estado, setEstado] = useState('')
    const [viaja_ida, setViajaIda] = useState('')
    const [viaja_vuelta, setViajaVuelta] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/api/dashboard/trabajadores/${id}`)
            .then(res => {
                setNombreCompleto(res.data[0].nombre_completo)
                setDireccion(res.data[0].direccion)
                setTelefono(res.data[0].telefono)
                setTransporte(res.data[0].transporte)
                setTipoEmpresa(res.data[0].tipo_empresa)
                setEstado(res.data[0].estado)
                setViajaIda(res.data[0].viaja_ida)
                setViajaVuelta(res.data[0].viaja_vuelta)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3000/api/dashboard/vehiculos')
            .then(res => {
                setVehiculos(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/api/dashboard/trabajadores/${id}`, {
            nombre_completo,
            direccion,
            telefono,
            transporte,
            tipo_empresa,
            estado,
            viaja_ida,
            viaja_vuelta
        })
            .then(res => {
                toast.success(res.data.message)
                setTimeout(() => {
                    navigate('/panel/personal')
                }, 1500)
            })
            .catch(error => {
                if (error.response) {
                    const { status, data } = error.response
                    if (status === 400) {
                        toast.error(data.message || 'Error al editar el trabajador')
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
                                <input
                                    type='text' name='nombre_completo' placeholder={nombre_completo} value={nombre_completo}
                                    onChange={(e) => setNombreCompleto(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Direccion</label>
                                <input
                                    type='text' name='direccion' placeholder={direccion} value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Telefono</label>
                                <input
                                    type='text' name='telefono' placeholder={telefono} value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Transporte</label>
                                <select
                                    name='transporte' value={transporte}
                                    onChange={(e) => setTransporte(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                >
                                    <option value=''>Selecciona un Vehiculo</option>
                                    {vehiculos.map((vehiculo) => (
                                        <option key={vehiculo.id_vehiculo} value={vehiculo.nombre}>{vehiculo.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Tipo de Empresa</label>
                                <select
                                    name='tipo_empresa' value={tipo_empresa}
                                    onChange={(e) => setTipoEmpresa(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                >
                                    <option value=''>Selecciona un Tipo de Empresa</option>
                                    <option value='EST'>EST</option>
                                    <option value='TP'>TP</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Estado</label>
                                <select
                                    name='estado' value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                >
                                    <option value=''>Selecciona un Estado</option>
                                    <option value='activo'>Activo</option>
                                    <option value='inactivo'>Inactivo</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[#0A0A0B]'>Viaje Ida</label>
                                <select
                                    name='viaje_ida' value={viaja_ida}
                                    onChange={(e) => setViajaIda(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
                                >
                                    <option value=''>Selecciona</option>
                                    <option value='si'>Si</option>
                                    <option value='no'>No</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[#0A0A0B]'>Viaje Vuelta</label>
                                <select
                                    name='viaje_vuelta' value={viaja_vuelta}
                                    onChange={(e) => setViajaVuelta(e.target.value)}
                                    className='p-2 rounded-md bg-transparent border border-gray-200 text-[#0A0A0B]'
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

export default EditarTrabajador