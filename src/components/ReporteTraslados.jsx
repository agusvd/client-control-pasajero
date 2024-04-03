import React, { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

const ReporteTraslados = ({ traslados, nombreTrabajador }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAsistencia, setSelectedAsistencia] = useState(null);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { timeZone: 'UTC' });
    };
    const openModal = (asistencia) => {
        console.log('click')
        setSelectedAsistencia(asistencia);
        setModalVisible(true);
    };
    const closeModal = () => {
        setSelectedAsistencia(null);
        setModalVisible(false);
    };

    // funcion para mostrar el valor en entero sin decimales
    const valorEntero = (valor) => {
        return Math.trunc(valor);
    }
    // confirmar eliminacion usando axios, useEffect y toast de react-hot-toast
    const confirmDelete = async (id_traslado) => {
        if (window.confirm('¿Estás seguro de eliminar este traslado?')) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/dashboard/traslados/${id_traslado}`);
                console.log(response.data);
                toast.success('Traslado eliminado exitosamente');
            } catch (error) {
                console.error('Error al eliminar el traslado:', error);
                toast.error('Error al eliminar el traslado');
            }
        }
    };



    return (
        <div className='pr-4 pl-4 flex flex-col gap-4 font-primary'>
            <Toaster />
            <div className='p-1 flex justify-between gap-4'>
                <div className='border border-gray-200 shadow bg-white p-2 rounded-xl w-1/3 flex gap-2 items-center'>
                    <LuSearch size={25} className='text-[#0A0A0B]' />
                    <input type='text' className='bg-white text-[#0A0A0B] outline-none text-sm' placeholder='Buscar...' />
                </div>
                <div className='border border-gray-200 shadow bg-white p-2 rounded-xl flex gap-2 justify-around items-center'>
                    <input type='date' className='bg-white text-[#0A0A0B] outline-none' />
                    <button className='bg-black text-white font-semibold px-2 py-1 rounded-md'>
                        Buscar
                    </button>
                </div>
            </div>
            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Fecha</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Conductor</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Vehiculo</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Destino</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Costo por persona</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Informacion</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {traslados.map((traslado, index) => (
                            <tr key={index} className='text-[#0A0A0B] hover:bg-gray-50 transition-colors'>
                                <td className='px-4 py-2'>{formatDate(traslado.fecha)}</td>
                                <td className='px-4 py-2'>{traslado.nombre_conductor}</td>
                                <td className='px-4 py-2'>{traslado.vehiculo}</td>
                                <td className='px-4 py-2'>{traslado.tipo_viaje}</td>
                                <td className='px-4 py-2'>{valorEntero(traslado.valor_por_persona)}</td>
                                <td className='px-4 py-2'>
                                    <button
                                        onClick={() => openModal(traslado.asistencias)}
                                        className="bg-black text-white transition-colors p-2 rounded-xl"
                                    >
                                        Asistencia
                                    </button>
                                </td>
                                <td className='px-4 py-2 flex gap-2'>
                                    <button className="bg-black text-white transition-colors p-2 rounded-xl">
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => confirmDelete(traslado.id_traslado)}
                                        className="bg-black text-white transition-colors p-2 rounded-xl">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modalVisible && (
                <div className="absolute top-0 left-0 right-0 ">
                    <div className="bg-white/30 h-screen flex justify-center items-center">
                        <div className='bg-white shadow-md rounded-xl '>
                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost ">✕</button>
                            <h3 className='text-3xl text-center font-semibold'>Asistencia</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Trabajador</th>
                                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia</th>
                                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedAsistencia.map((asistencia, index) => (
                                        <tr key={index}>
                                            <td className='px-4 py-2 text-[#0A0A0B]'>{nombreTrabajador(asistencia.id_trabajador)}</td>
                                            <td className='px-4 py-2 text-[#0A0A0B]'>{asistencia.asistencia}</td>
                                            <td className='px-4 py-2 text-[#0A0A0B]'>{asistencia.comentario}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReporteTraslados;
