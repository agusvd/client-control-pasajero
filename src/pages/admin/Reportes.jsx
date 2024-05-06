import React, { useState } from 'react'
import Menu, { MenuItem } from '../../components/Menu';
import NavBar from '../../components/Nav/NavBar';
import ReporteTraslados from '../../components/Reportes/ReporteTraslados';
import ReportesAsistencia from '../../components/Reportes/ReportesAsistencia';

const Reportes = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-gray-100'>
            <NavBar />
            <div className='w-full flex justify-center items-center sm:justify-start pt-3'>
                <Menu>
                    <MenuItem text='Asistencias' number={1} changePage={changePage} />
                    <MenuItem text='Traslados' number={2} changePage={changePage} />
                </Menu>
            </div>
            {currentPage === 1 && (<ReportesAsistencia />)}
            {currentPage === 2 && (<ReporteTraslados />)}
        </div>
    );
};

export default Reportes;
