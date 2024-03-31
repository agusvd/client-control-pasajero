import React, { useState, useEffect } from 'react';
import { LuLayoutGrid, LuUsers, LuBus, LuBarChart, LuListChecks } from 'react-icons/lu';
import TablaTrabajadores from '../../components/TablaTrabajadores';
import Menu, { MenuItem } from '../../components/Menu';
import Nav, { NavItem } from '../../components/Nav';


const Personal = () => {
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


    return (
        <div className='h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/Opciones' text='Opciones' />
            </Nav>
            <div>
                <h1 className='text-4xl font-semibold pl-4 pt-6 text-[#FAFAFA]'>
                    Personal
                </h1>
            </div>
            <Menu>
                <MenuItem text='Trabajadores' number={1} />
                <MenuItem text='Conductores' number={2} />
            </Menu>
            <TablaTrabajadores trabajadores={trabajadores} />
        </div>
    )
}

export default Personal;
