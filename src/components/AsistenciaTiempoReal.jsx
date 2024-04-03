import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AsistenciaTiempoReal = () => {
    const [asistenciaHoy, setAsistenciaHoy] = useState({ trasladosIda: [], trasladosVuelta: [] });

    useEffect(() => {
        const obtenerAsistenciaHoy = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/dashboard/asistencia-hoy`);
                setAsistenciaHoy(response.data);
            } catch (error) {
                console.error('Error al obtener la asistencia de hoy:', error);
            }
        };

        obtenerAsistenciaHoy();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { timeZone: 'UTC' });
    };

    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold mb-4 text-[#0A0A0B] pl-2'>Asistencia del día de hoy ({formatDate(new Date())})</h2>
            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>#</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Nombre</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia Ida</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia Vuelta</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario Ida</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario Vuelta</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Transporte</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {asistenciaHoy.trasladosIda.map((traslado, index) => (
                            <tr key={index}>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{index + 1}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{traslado.nombre_trabajador}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{traslado.asistencia}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{asistenciaHoy.trasladosVuelta[index]?.asistencia || 'No hay registro'}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{traslado.comentario || 'No hay registro'}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{asistenciaHoy.trasladosVuelta[index]?.comentario || 'No hay registro'}</td>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{traslado.vehiculo_nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default AsistenciaTiempoReal;
