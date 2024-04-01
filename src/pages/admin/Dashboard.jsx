import React, { useState, useEffect } from 'react'
import Nav, { NavItem } from '../../components/Nav'
import Lista from '../../components/Lista'
import Resumen from '../../components/Resumen'

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/reportes' text='Reportes' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>

            <div className='flex gap-2'>
                <div className='flex flex-col gap-4 pt-4 pl-4'>
                    <Resumen />
                </div>
                <Lista/>
            </div>
        </div>
    )
}

export default Dashboard