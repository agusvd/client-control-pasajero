import React from 'react'
import Sidebard from '../../components/Sidebard'
import { SidebarItem } from '../../components/Sidebard';
import { LuLayoutGrid, LuList, LuBus, LuBarChart } from "react-icons/lu";


const Dashbaord = () => {
    return (
        <div className='h-screen font-primary flex w-full'>
            <Sidebard>
                <SidebarItem icon={<LuLayoutGrid size={20}/>} text="Inicio" />
                <SidebarItem icon={<LuList size={20}/>} text="Trabajadores" />
                <SidebarItem icon={<LuBus size={20}/>} text="Viajes" />
                <SidebarItem icon={<LuBarChart size={20}/>} text="Reportes" />
            </Sidebard>
        </div>
    )
}

export default Dashbaord