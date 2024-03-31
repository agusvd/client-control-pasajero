import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';

const Lista = ({ trabajadores }) => {

    return (
        <div className='w-full p-4'>
            <div className='flex justify-start items-center'>
                <h1 className='text-3xl text-[#FAFAFA] font-bold mb-4'>Lista</h1>
            </div>
            <div className='border rounded-lg overflow-hidden border-[#27272A]'>
                <table className="table-auto min-w-full">
                    <thead className='bg-[#0A0A0B] text-[#FAFAFA] border-b border-[#27272A]'>
                        <tr>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">Transporte</th>
                            <th className="px-4 py-2 text-start">Estado</th>
                            <th className="px-4 py-2 text-start">Viaje Ida</th>
                            <th className="px-4 py-2 text-start">Viaje Vuelta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.map((trabajador) => (
                            <tr
                                key={trabajador.id_trabajador}
                                className={`${trabajador.estado ? 'bg-[#0A0A0B]' : 'bg-[#27272A]'} hover:bg-[#27272A] cursor-pointer transition-colors`}>
                                <td className="px-4 py-2 text-[#FAFAFA]">
                                    {trabajador.nombre_completo}
                                </td>
                                <td className="px-4 py-2 text-[#FAFAFA]">{trabajador.transporte}</td>
                                <td className="px-4 py-2">{trabajador.estado ? <span className="text-green-500">Activo</span> : <span className="text-red-500">Inactivo</span>}</td>
                                <td className="px-4 py-2 text-[#FAFAFA]">{trabajador.viaje_ida ? 'Si' : 'No'}</td>
                                <td className="px-4 py-2 text-[#FAFAFA]">{trabajador.viaje_vuelta ? 'Si' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lista
