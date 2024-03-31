import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';

const Trabajadores = ({ trabajadores }) => {

    const [selectedTrabajador, setSelectedTrabajador] = useState(null);


    // confirmar eliminacion
    const handleDelete = (trabajador) => {
        setSelectedTrabajador(trabajador);
        if (selectedTrabajador) {
            toast((t) => (
                <div className='flex gap-2 bg-[#0A0A0B] w-full'>
                    <p className='text-wrap'>¿Seguro que quiere eliminar a <b>{trabajador.nombre_completo}?</b></p>
                    <button
                        onClick={() => {
                            // Aquí deberías agregar la lógica para eliminar realmente al trabajador
                            // Puede ser una función que llame a una API para eliminar al trabajador de la base de datos
                            toast.dismiss(t.id);
                        }}
                        className='border-[#27272a] border text-[#FAFAFA] p-2 rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                        Sí
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className='border-[#27272a] border text-[#FAFAFA] p-2 rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                        No
                    </button>
                </div>
            ), { 
                icon: '😳',
                style: {
                    border: '1px solid #27272A',
                    borderRadius: '30px',
                    padding: '16px',
                    color: '#FAFAFA',
                    background: '#0A0A0B',
                },
                duration: 10000,
            },);
        }
    };

    return (
        <div className='min-h-screen w-full p-4'>
            <Toaster />
            <div className='border rounded-lg overflow-auto border-gray-200]'>
                <table className="table-auto min-w-full">
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">Direccion</th>
                            <th className="px-4 py-2 text-start">Telefono</th>
                            <th className="px-4 py-2 text-start">Tipo Empresa</th>
                            <th className="px-4 py-2 text-start">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.map((trabajador) => (
                            <tr
                                key={trabajador.id_trabajador}
                                className='hover:bg-[#F4F4F5]  transition-colors'>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.nombre_completo}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.direccion}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.telefono}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.tipo_empresa}</td>
                                <td className="px-4 py-2 text-[#0A0A0B] gap-2 flex">
                                    <button className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Editar</button>
                                    <button
                                        onClick={() => handleDelete(trabajador)}
                                        className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Trabajadores