import React from 'react'
import NavMobile from '../../components/NavMobile'
import Checklist from '../../components/Checklist'

const InicioChofer = () => {
    return (
        <div className='h-screen w-full font-primary flex flex-col'>
            {/* Nav */}
            <NavMobile />
            {/* Barra de IDA - Vuelta */}
            <Checklist/>
        </div>
    )
}

export default InicioChofer