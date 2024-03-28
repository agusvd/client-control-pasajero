import React from 'react'
import Sidebard from '../../components/Sidebard'
import { SidebarItem } from '../../components/Sidebard';
import { LuLayoutGrid, LuBus, LuBarChart, LuUsers, LuListChecks } from "react-icons/lu";

const Lista = () => {
    return (
        <div className='h-screen font-primary flex w-full'>
            <Sidebard>
                <SidebarItem icon={<LuLayoutGrid size={20}/>} text="Inicio" link='/admin' />
                <SidebarItem icon={<LuUsers size={20}/>} text="Trabajadores" link='/admin/trabajadores' />
                <SidebarItem icon={<LuListChecks size={20} />} text="Lista" link='/admin/lista' />
                <SidebarItem icon={<LuBus size={20}/>} text="Viajes" link='/admin/viajes' />
                <SidebarItem icon={<LuBarChart size={20}/>} text="Reportes" link='/admin/reportes' />
            </Sidebard>
        </div>
    )
}

export default Lista