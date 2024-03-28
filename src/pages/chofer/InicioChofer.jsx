import React from 'react'
import NavMobile from '../../components/NavMobile'
import Checklist from '../../components/Checklist'

const InicioChofer = () => {
    return (
        <div className='h-screen w-full font-primary flex flex-col'>
            <NavMobile />
            <Checklist/>
        </div>
    )
}

export default InicioChofer