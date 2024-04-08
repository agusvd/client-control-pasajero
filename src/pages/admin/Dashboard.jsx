import React from 'react'
import Valores from '../../components/Valores'
import NavBar from '../../components/NavBar'
import AsistenciaTiempoReal from '../../components/AsistenciaTiempoReal';

const Dashboard = () => {
    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <NavBar />
            <div className='p-2 flex w-full justify-center items-center sm:justify-start'>
                <Valores />
            </div>
            <AsistenciaTiempoReal />
        </div>
    )
}

export default Dashboard