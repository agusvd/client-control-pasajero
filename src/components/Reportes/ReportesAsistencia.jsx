import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search, { SearchItem } from '../Search';
import DatePicker, { DatePickerItem } from '../Date/DatePicker';

const ReportesAsistencia = () => {
    const [fecha, setFecha] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipoDestino, setTipoDestino] = useState('');
    const [asistencias, setAsistencias] = useState([]);

    const buscarAsistencia = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/dashboard/asistencia?fecha=${fecha}&nombre=${nombre}&tipoDestino=${tipoDestino}`); // Enviar el tipo de destino en la solicitud
            setAsistencias(response.data);
        } catch (error) {
            console.error('Error al buscar asistencia:', error);
        }
    };

    useEffect(() => {
        buscarAsistencia();
    }, [fecha, nombre, tipoDestino]); // Agregar tipoDestino a las dependencias de useEffect

    const handleTipoDestinoChange = (e) => {
        const selectedTipoDestino = e.target.value;
        if (selectedTipoDestino === 'ida y vuelta') {
            setTipoDestino('');
        } else {
            setTipoDestino(selectedTipoDestino);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { timeZone: 'UTC' });
    };

    return (
        <div className='pr-4 pl-4 flex flex-col gap-4 font-primary'>
            {/* barra larga */}
            <div className='mt-3 flex'>
                <div className='flex gap-3 w-full'>
                    <Search>
                        <SearchItem text='Buscar por nombre' onChange={(e) => setNombre(e.target.value)} />
                    </Search>
                    <select className='rounded-md  outline-none bg-white text-black shadow border transition-colors' onChange={handleTipoDestinoChange}>
                        <option value=''>Seleccionar destino</option>
                        <option value='ida'>Destino Planta</option>
                        <option value='vuelta'>Destino Hogar</option>
                        <option value='ida y vuelta'>Ambos</option>
                    </select>
                </div>
                <DatePicker>
                    <DatePickerItem onChange={(e) => setFecha(e.target.value)} />
                </DatePicker>
            </div>
            {/* fin barra larga */}
            <table className='table-auto w-full rounded-md bg-white pb-2 shadow-md'>
                <thead className='border-b'>
                    <tr>
                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'></th>
                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Fecha</th>
                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Nombre</th>
                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia</th>
                        <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {asistencias.map((asistencia, index) => (
                        <tr key={index} className='hover:bg-gray-100'>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{index + 1}</td>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{formatDate(asistencia.fecha)}</td>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{asistencia.nombre_completo}</td>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{asistencia.asistencia}</td>
                            <td className='px-4 py-2 text-[#0A0A0B]'>{asistencia.comentario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportesAsistencia;
