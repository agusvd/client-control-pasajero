import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

const Lista = () => {

    const [trabajadores, setTrabajadores] = useState([]);

    // peticion get
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/dashboard/trabajadores')
            .then((res) => {
                setTrabajadores(res.data)
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
            });
    }, [])

    return (
        <div className='h-screen w-full p-4'>
            <table className='table-auto w-full rounded-md bg-white pb-2 shadow-md'>
                <thead className='border-b'>
                    <tr>
                        <th className="px-4 py-2 text-start"></th>
                        <th className="px-4 py-2 text-start">Nombre</th>
                        <th className="px-4 py-2 text-start">Transporte</th>
                        <th className="px-4 py-2 text-start">Viaje Ida</th>
                        <th className="px-4 py-2 text-start">Viaje Vuelta</th>
                        <th className="px-4 py-2 text-start">Estado</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                    {trabajadores.map((trabajador, index) => (
                        <tr
                            key={trabajador.id_trabajador}
                            className={`${trabajador.estado ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-100 cursor-pointer transition-colors`}>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{index + 1}</td>
                            <td className="px-4 py-2 text-[#0A0A0B]">
                                {trabajador.nombre_completo}
                            </td>
                            <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.transporte}</td>
                            <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.viaja_ida === 'si' ? <span>SI</span> : <span className='text-red-500'>NO</span>}</td>
                            <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.viaja_vuelta === 'si' ? <span>SI</span> : <span className='text-red-500'>NO</span>}</td>
                            <td className="px-4 py-2">{trabajador.estado === 'activo' ? <span className="text-green-500">Activo</span> : <span className="text-red-500">Inactivo</span>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lista
