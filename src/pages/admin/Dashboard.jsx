import React, { useState, useEffect } from 'react'
import Lista from '../../components/Lista'
import Resumen from '../../components/Resumen'
import NavBar from '../../components/NavBar'

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <NavBar />
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