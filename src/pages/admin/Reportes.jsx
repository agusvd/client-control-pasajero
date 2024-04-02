import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu, { MenuItem } from '../../components/Menu';
import ReporteGeneral from '../../components/ReporteGeneral';
import NavBar from '../../components/NavBar';

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

    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <NavBar />
            <div className='flex w-full justify-between'>
                <Menu>
                    <MenuItem text='General' number={1} changePage={changePage} />
                    <MenuItem text='Detallado' number={2} changePage={changePage} />
                </Menu>
                <div className='p-4'>
                    <button className='bg-black text-white font-semibold px-2 py-1 rounded-md'>
                        Descargar
                    </button>
                </div>

            </div>
            {currentPage === 1 && (<ReporteGeneral />)}
        </div>
    );
};

export default Reportes;
