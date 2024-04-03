import React, { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import Search, { SearchItem } from './Search';
import DatePicker, { DatePickerItem } from './DatePicker';

const ReporteTraslados = () => {
    const [traslados, setTraslados] = useState([]);
    const [trabajadores, setTrabajadores] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Obtener los traslados
    useEffect(() => {
        const fetchTraslados = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/dashboard/traslados');
                setTraslados(response.data);
            } catch (error) {
                console.error('Error al obtener los traslados:', error);
            }
        };

        fetchTraslados();
    }, []);

    // Obtener los trabajadores
    useEffect(() => {
        const fetchTrabajadores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/dashboard/trabajadores');
                setTrabajadores(response.data);
            } catch (error) {
                console.error('Error al obtener los trabajadores:', error);
            }
        };

        fetchTrabajadores();
    }, []);

    // Obtener los nombres de los trabajadores asociados a cada traslado
    const nombreTrabajador = (id_trabajador) => {
        const trabajador = trabajadores.find(t => t.id_trabajador === id_trabajador);
        return trabajador ? trabajador.nombre_completo : 'Trabajador no encontrado';
    };

    // Función para filtrar los traslados por nombre del vehículo
    const filterByVehicleName = (traslado) => {
        return traslado.vehiculo.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAsistencia, setSelectedAsistencia] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { timeZone: 'UTC' });
    };

    const openModal = (asistencia) => {
        setSelectedAsistencia(asistencia);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedAsistencia(null);
        setModalVisible(false);
    };

    const valorEntero = (valor) => {
        return Math.trunc(valor);
    };

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='pr-4 pl-4 flex flex-col gap-4 font-primary'>
            <Toaster />
            <div className='p-1 flex justify-between gap-4'>
                <Search >
                    <SearchItem text='Buscar por vehiculo' onChange={handleSearchChange} />
                </Search>
                <DatePicker>
                    <DatePickerItem />
                </DatePicker>
            </div>
            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'></th>
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
                        {traslados.filter(filterByVehicleName).map((traslado, index) => (
                            <tr key={index} className='text-[#0A0A0B] hover:bg-gray-50 transition-colors'>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{index + 1}</td>
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
                                        className="bg-black text-white transition-colors p-2 rounded-xl"
                                    >
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
