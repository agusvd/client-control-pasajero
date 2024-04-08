import React, { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";
import axios from 'axios';
import Search, { SearchItem } from './Search';
import DatePicker, { DatePickerItem } from './DatePicker';

const ReportesAsistencia = () => {
    const [fecha, setFecha] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipoDestino, setTipoDestino] = useState(''); // Nuevo estado para el tipo de destino
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
            <div className='p-1 flex justify-between gap-4'>
                <Search>
                    <SearchItem text='Buscar por nombre' onChange={(e) => setNombre(e.target.value)} />
                </Search>
                <div className='flex gap-2 '>
                    <select className='rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors' onChange={handleTipoDestinoChange}> {/* Manejar el cambio de tipo de destino */}
                        <option value=''>Seleccionar destino</option>
                        <option value='ida'>Destino Planta</option>
                        <option value='vuelta'>Destino Hogar</option>
                        <option value='ida y vuelta'>Ambos</option>
                    </select>
                    <DatePicker>
                        <DatePickerItem onChange={(e) => setFecha(e.target.value)} />
                    </DatePicker>
                </div>

            </div>

            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'></th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Fecha</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Nombre</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {asistencias.map((asistencia, index) => (
                            <tr key={index}>
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
        </div>
    );
};

export default ReportesAsistencia;
