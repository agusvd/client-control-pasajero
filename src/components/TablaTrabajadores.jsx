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
        <div className='bg-gray-100 w-full p-4'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl text-black font-bold mb-4'>Trabajadores</h1>
            </div>
            <div className="overflow-x-auto rounded-md">
                <table className="min-w-full rounded-md text-center">
                    <thead className='bg-[#202020] text-white rounded-t-md'>
                        <tr>
                            <th className="px-4 py-2">Nombre</th>
                            <th className="px-4 py-2">Transporte</th>
                            <th className="px-4 py-2">Estado</th>
                            <th className="px-4 py-2">Viaje Ida</th>
                            <th className="px-4 py-2">Viaje Vuelta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.map((trabajador) => (
                            <tr
                                key={trabajador.id_trabajador}
                                onClick={() => openModal(trabajador)}
                                className={`${trabajador.estado ? 'bg-green-100' : 'bg-red-100'} hover:bg-white cursor-pointer transition-colors`}
                            >
                                <td className="px-4 py-2 text-black">
                                    {trabajador.nombre_completo}
                                </td>
                                <td className="px-4 py-2 text-black">{trabajador.transporte}</td>
                                <td className="px-4 py-2">{trabajador.estado ? <span className="text-green-500">Activo</span> : <span className="text-red-500">Inactivo</span>}</td>
                                <td className="px-4 py-2 text-black">{trabajador.viaje_ida ? 'Si' : 'No'}</td>
                                <td className="px-4 py-2 text-black">{trabajador.viaje_vuelta ? 'Si' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {trabajadorSeleccionado && (
                <dialog open className="modal" onClick={closeModal}>
                    <div className="modal-box bg-white" onClick={(e) => e.stopPropagation()}>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500" onClick={closeModal}>✕</button>
                            <h3 className="font-bold text-lg text-black text-center">{trabajadorSeleccionado.nombre_completo}</h3>
                            <div className='border-2 w-full'>
                                <div className='flex justify-around items-center text-center'>
                                    <div className='border-2 w-full text-black font-bold'>
                                        <p>Telefono</p>
                                        <p>Direccion</p>
                                        <p>Empresa</p>
                                        <p>Transporte</p>
                                        <p>Estado</p>
                                        <p>Viaja IDA</p>
                                        <p>Viaja vuelta</p>
                                    </div>
                                    <div className='border-2 w-full text-black'>
                                        <p>{trabajadorSeleccionado.telefono}</p>
                                        <p>{trabajadorSeleccionado.direccion}</p>
                                        <p>{trabajadorSeleccionado.tipo_empresa}</p>
                                        <p>{trabajadorSeleccionado.transporte}</p>
                                        <p>{trabajadorSeleccionado.estado ? <span className='text-green-500'>Activo</span> : <span className='text-red-500'>Inactivo</span>}</p>
                                        <p>{trabajadorSeleccionado.viaja_ida ? <span>Si</span> : <span>No</span>}</p>
                                        <p>{trabajadorSeleccionado.viaja_vuelta ? <span>Si</span> : <span>No</span>}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' pt-5 flex justify-around items-center'>
                                <div className="btn btn-sm bg-cyan-500 hover:bg-black btn-primary text-white">
                                    Editar trabajador
                                </div>
                                <div onClick={confirmDelete} className="btn btn-sm bg-red-500 hover:bg-black btn-primary text-white">
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
