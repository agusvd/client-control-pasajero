import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav, { NavItem } from '../../components/Nav';

const Reportes = () => {
    const [traslados, setTraslados] = useState([]);
    const [trabajadores, setTrabajadores] = useState([]);
    const [conductores, setConductores] = useState([]);

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

    // obtener conductor por id

    useEffect(() => {
        const fetchConductores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/users/conductor')
                setConductores(response.data);
            } catch (error) {
                console.error('Error al obtener los conductores:', error);
            }
        };

        fetchConductores();
    }, []);


    const getConductorById = (id_conductor) => {
        const conductor = conductores.find((c) => c.id_conductor === id_conductor);
        return conductor ? conductor.nombre : 'Conductor no encontrado';
    };

    // Obtener los nombres de los trabajadores asociados a cada traslado
    const getTrabajadorNames = (id_trabajadores) => {
        const nombres = id_trabajadores.map(id => {
            const trabajador = trabajadores.find(t => t.id_trabajador === id);
            return trabajador ? trabajador.nombre_completo : 'Trabajador no encontrado';
        });
        return nombres.join(', ');
    };

    // Formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { timeZone: 'UTC' });
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/reportes' text='Reportes' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>
            <h1 className="text-2xl font-bold mb-4">Reportes de Traslados</h1>
            <div className='border rounded-lg overflow-auto border-gray-200'>
                <table className="table-auto min-w-full">
                    <thead className="text-[#0A0A0B] bg-white border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-start">Fecha</th>
                            <th className="px-4 py-2 text-start">Conductor</th>
                            <th className="px-4 py-2 text-start">Trabajadores</th>
                            <th className=" px-4 py-2 text-start">Tipo de Viaje</th>
                            <th className=" px-4 py-2 text-start">Comentario</th>
                            <th className=" px-4 py-2 text-start">Valor por Persona</th>
                            <th className=" px-4 py-2 text-start">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {traslados.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-4 whitespace-nowrap">No hay traslados</td>
                            </tr>
                        ) : (
                            traslados.map((traslado, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B]">{formatDate(traslado.fecha)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B]">{getConductorById(traslado.conductor)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B] flex flex-col">{getTrabajadorNames(traslado.trabajadores)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B]">{traslado.tipo_viaje}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B]">{traslado.comentario}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B]">{traslado.valor_por_persona}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-[#0A0A0B] gap-2 flex">
                                        <button className="bg-[#0A0A0B] text-white px-4 py-2 rounded-lg">Editar</button>
                                        <button className="bg-[#0A0A0B] text-white px-4 py-2 rounded-lg">Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reportes;
