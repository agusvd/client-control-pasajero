import React, { useState, useEffect } from 'react';
import { LuLayoutGrid, LuUsers, LuBus, LuBarChart, LuListChecks } from 'react-icons/lu';
import Sidebar from '../../components/Sidebard';
import { SidebarItem } from '../../components/Sidebard';
import TablaTrabajadores from '../../components/TablaTrabajadores';
import axios from 'axios';

const Trabajadores = () => {
    const trabajadores = [
        {
            "id_trabajador": 1,
            "nombre_completo": "Juan Perez",
            "direccion": "Calle 1",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "EST",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 2,
            "nombre_completo": "Maria Lopez",
            "direccion": "Calle 2",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "EST",
            "estado": false,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 3,
            "nombre_completo": "Pedro Ramirez",
            "direccion": "Calle 3",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 4,
            "nombre_completo": "Ana Garcia",
            "direccion": "Calle 4",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
    ]

    const [opcion, setOpcion] = useState(0)

    return (
        <div className='h-screen w-full flex font-primary'>
            <Sidebar>
                <SidebarItem icon={<LuLayoutGrid size={20} />} text="Inicio" link='/admin' />
                <SidebarItem icon={<LuUsers size={20} />} text="Trabajadores" link='/admin/trabajadores' />
                <SidebarItem icon={<LuListChecks size={20} />} text="Lista" link='/admin/lista' />
                <SidebarItem icon={<LuBus size={20} />} text="Viajes" link='/admin/viajes' />
                <SidebarItem icon={<LuBarChart size={20} />} text="Reportes" link='/admin/reportes' />
            </Sidebar>
            <div className='h-full w-full bg-gray-100 flex flex-col'>
                <div className='h-[70px] border-b-2 flex justify-center items-center gap-3'>
                    <button className='text-black p-2 rounded-md bg-white shadow-md'>
                        Trabajadores
                    </button>
                    <button className='text-black p-2 rounded-md bg-white shadow-md'>
                        Conductores
                    </button>
                </div>
                <TablaTrabajadores trabajadores={trabajadores} />
            </div>

        </div>
    )
}

export default Trabajadores;
