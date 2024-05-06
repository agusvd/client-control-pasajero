import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import NavBar from '../../components/Nav/NavBar'

const EditarConductor = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [vehiculos, setVehiculos] = useState([])
    const [nombre_completo, setNombreCompleto] = useState('')
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [telefono, setTelefono] = useState('')
    const [id_vehiculo, setIdVehiculo] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/api/user/users/conductor/' + id)
            .then(res => {
                setNombreCompleto(res.data[0].nombre_completo)
                setUsuario(res.data[0].usuario)
                setPassword(res.data[0].password)
                setTelefono(res.data[0].telefono)
                setIdVehiculo(res.data[0].id_vehiculo)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

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

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put(`http://localhost:3000/api/auth/edit/conductor/${id}`, { nombre_completo, usuario, password, telefono, id_vehiculo })
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
            <NavBar />
            <div className='p-10 h-full'>
                <div className='border-b border-gray-200 pb-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[#0A0A0B] text-4xl font-semibold text-start'>Formulario</h1>
                        <Link to='/panel/personal' className='p-1 hover:bg-gray-100 transition-colors flex items-center rounded-md'>
                            <LuArrowLeft className='text-[#0A0A0B]' size={30} />
                        </Link>
                    </div>
                    <p className='text-zinc-400'>Rellena el Formulario para agregar a un nuevo Conductor</p>
                </div>
                <div className='flex justify-center pt-5 h-full'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Nombre Completo</label>
                            <input
                                type='text' name='nombre_completo' value={nombre_completo} placeholder={nombre_completo}
                                onChange={(e) => setNombreCompleto(e.target.value)}
                                className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Usuario</label>
                            <input
                                type='text' name='usuario' value={usuario} placeholder={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Contraseña</label>
                            <input
                                type='password' name='password' value={password} placeholder={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Telefono</label>
                            <input
                                type='text' name='telefono' value={telefono} placeholder={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Vehiculo</label>
                            <select type='text' name='vehiculo' value={id_vehiculo}
                                onChange={(e) => setIdVehiculo(e.target.value)}
                                className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'>
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

export default EditarConductor