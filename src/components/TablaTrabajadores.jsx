import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';

const TablaTrabajadores = ({ trabajadores }) => {
    const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState(null);

    const openModal = (trabajador) => {
        setTrabajadorSeleccionado(trabajador);
    };

    const closeModal = () => {
        setTrabajadorSeleccionado(null);
    };

    const confirmDelete = () => {
        if (trabajadorSeleccionado) {
            toast((t) => (
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <p>¿Seguro que quiere eliminar a </p>
                        <p className='font-semibold'>{trabajadorSeleccionado.nombre_completo}?</p>
                    </div>
                    <div className='flex justify-around items-center'>
                        <button
                            className='btn-primary btn bg-red-500 hover:bg-black text-white'
                            onClick={() => {
                                // Aquí deberías agregar la lógica para eliminar realmente al trabajador
                                // Puede ser una función que llame a una API para eliminar al trabajador de la base de datos
                                toast.dismiss(t.id);
                            }}>
                            <span>
                                Sí
                            </span>
                        </button>
                        <button
                            className='btn-primary btn bg-cyan-500 hover:bg-black text-white'
                            onClick={() => toast.dismiss(t.id)}>
                            <span>
                                No
                            </span>
                        </button>
                    </div>

                </div>
            ));
        }
    };

    return (
        <div className='w-full p-4'>
            <div className='flex justify-start items-center'>
                <h1 className='text-3xl text-[#FAFAFA] font-bold mb-4'>Trabajadores</h1>
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
                                onClick={() => openModal(trabajador)}
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

            {trabajadorSeleccionado && (
                <dialog open className="modal bg-black/50" onClick={closeModal}>
                    <div className="modal-box bg-[#0A0A0B]" onClick={(e) => e.stopPropagation()}>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500" onClick={closeModal}>✕</button>
                            <h3 className="text-xl text-[#FAFAFA] text-center pb-4">Informacion de <b>{trabajadorSeleccionado.nombre_completo}</b></h3>
                            <div className=' w-full'>
                                <div className='flex justify-around items-center text-center'>
                                    <div className='border-2 w-full text-start p-1'>
                                        <p className='text-[#FAFAFA]'>Telefono</p>
                                        <p className='text-[#FAFAFA]'>Direccion</p>
                                        <p className='text-[#FAFAFA]'>Empresa</p>
                                        <p className='text-[#FAFAFA]'>Transporte</p>
                                        <p className='text-[#FAFAFA]'>Estado</p>
                                        <p className='text-[#FAFAFA]'>Viaja IDA</p>
                                        <p className='text-[#FAFAFA]'>Viaja vuelta</p>
                                    </div>
                                    <div className='border-2 border-l-0 k w-full p-1 text-start'>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.telefono}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.direccion}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.tipo_empresa}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.transporte}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.estado ? <span className='text-green-500'>Activo</span> : <span className='text-red-500'>Inactivo</span>}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.viaja_ida ? <span>Si</span> : <span>No</span>}</p>
                                        <p className='text-[#FAFAFA]'>{trabajadorSeleccionado.viaja_vuelta ? <span>Si</span> : <span>No</span>}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' pt-5 flex justify-around items-center'>
                                <div className="btn btn-sm bg-[#0A0A0B] border-[#27272A] text-white">
                                    Editar trabajador
                                </div>
                                <div onClick={confirmDelete} className="btn btn-sm bg-[#0A0A0B] border-[#27272A] text-white">
                                    Elimitar trabajador
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default TablaTrabajadores
