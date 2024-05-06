import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuArrowLeft } from 'react-icons/lu'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import NavBar from '../../components/Nav/NavBar'

const FormVehiculo = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        nombre: '',
        patente: '',
        capacidad: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/dashboard/vehiculos', { ...values })
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
                        toast.error(data.message || 'Error al agregar el vehiculo')
                    } else {
                        toast.error('Error de red')
                    }
                }
            })
    }

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Toaster />
            <NavBar/>
            <div className='p-10 h-full'>
                <div className='border-b border-[#27272A] pb-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[#0A0A0B] text-4xl font-semibold text-start'>Formulario</h1>
                        <Link to='/panel/personal' className='p-1 hover:bg-gray-200 transition-colors flex items-center rounded-md'>
                            <LuArrowLeft className='text-[#0A0A0B]' size={30} />
                        </Link>
                    </div>
                    <p className='text-zinc-400'>Rellena el Formulario para agregar a un nuevo Vehiculor</p>
                </div>
                <div className='flex justify-center pt-5 h-full'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Nombre</label>
                            <input type='text' name='nombre' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            onChange={e => setValues({ ...values, nombre: e.target.value })} />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Patente</label>
                            <input type='text' name='patente' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            onChange={e => setValues({ ...values, patente: e.target.value })} />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[#0A0A0B]'>Capacidad</label>
                            <input type='number' name='capacidad' className='p-2 rounded-md bg-transparent border border-gray-200 sm:w-1/2 text-[#0A0A0B]'
                            onChange={e => setValues({ ...values, capacidad: e.target.value })} />
                        </div>
                        <button className='bg-[#FF5757] text-white p-2 rounded-md w-1/2'>Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormVehiculo