import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu, { MenuItem } from '../../components/Menu';
import NavBar from '../../components/NavBar';
import DateRangePicker from '../../components/DateRangePicker';
import ReporteTraslados from '../../components/ReporteTraslados';
import ReportesAsistencia from '../../components/ReportesAsistencia';

const Reportes = () => {
    const [traslados, setTraslados] = useState([]);
    const [trabajadores, setTrabajadores] = useState([]);


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
    console.log(traslados);

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

    


    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <NavBar />
            <div className='w-full flex justify-center items-center sm:justify-start'>
                <Menu>
                    <MenuItem text='Asistencias' number={1} changePage={changePage} />
                    <MenuItem text='Traslados' number={2} changePage={changePage} />
                </Menu>
            </div>
            {currentPage === 1 && (<ReportesAsistencia />)}
            {currentPage === 2 && (<ReporteTraslados traslados={traslados} nombreTrabajador={nombreTrabajador} />)}
        </div>
    );
};

export default Reportes;
