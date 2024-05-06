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


    const obtenerFecha = () => {
        const actual = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = actual.toLocaleDateString('es-ES', options);
        return fechaFormateada;
    }

    const [fechaActual, setFechaActual] = useState(obtenerFecha());

    return (
        <div className='p-4 '>
            <h2 className='text-xl font-bold mb-4 text-[#0A0A0B] pl-2 border-b-2'>Asistencia {fechaActual}</h2>
            <table className='table-auto w-full rounded-md bg-white pb-2 shadow'>
                <thead className='border-b'>
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
                <tbody className=''>
                    {asistenciaHoy.trasladosIda.map((traslado, index) => (
                        <tr key={index} className='hover:bg-gray-100'>
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
    );

};

export default AsistenciaTiempoReal;
