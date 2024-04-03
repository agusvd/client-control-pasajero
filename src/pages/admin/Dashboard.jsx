import React, { useState, useEffect } from 'react'
import Valores from '../../components/Valores'
import NavBar from '../../components/NavBar'
import Resumen from '../../components/Resumen';
import AsistenciaTiempoReal from '../../components/AsistenciaTiempoReal';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <NavBar />
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 pt-4 pl-4'>
                    <Valores />
                    <Resumen />
                </div>
                <AsistenciaTiempoReal />
            </div>
        </div>
    )
}

export default Dashboard