import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';

const Lista = ({ trabajadores }) => {

    return (
        <div className='h-screen w-full p-4'>
            <div className='border rounded-lg overflow-hidden border-gray-200'>
                <table className="table-auto min-w-full">
                    <thead className='bg-white text-[#0A0A0B] border-b border-gray-200'>
                        <tr>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">Transporte</th>
                            <th className="px-4 py-2 text-start">Viaje Ida</th>
                            <th className="px-4 py-2 text-start">Viaje Vuelta</th>
                            <th className="px-4 py-2 text-start">Estado</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {trabajadores.map((trabajador) => (
                            <tr
                                key={trabajador.id_trabajador}
                                className={`${trabajador.estado ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-100 cursor-pointer transition-colors`}>
                                <td className="px-4 py-2 text-[#0A0A0B]">
                                    {trabajador.nombre_completo}
                                </td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.transporte}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.viaje_ida ? <span className='text-[#0A0A0B]'>Si</span> : <span className='text-red-500'>No</span>}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.viaje_vuelta ? <span className='text-[#0A0A0B]'>Si</span> : <span className='text-red-500'>No</span>}</td>
                                <td className="px-4 py-2">{trabajador.estado ? <span className="text-green-500">Activo</span> : <span className="text-red-500">Inactivo</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lista
