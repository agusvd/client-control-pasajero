import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import Menu, { MenuItem } from '../../components/Menu'
import Lista from '../../components/Lista'
import Resumen from '../../components/Resumen'
const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
        {
            "id_trabajador": 5,
            "nombre_completo": "Jose Rodriguez",
            "direccion": "Calle 5",
            "telefono": "1234567890",
            "transporte": "TAXI",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 6,
            "nombre_completo": "Carlos Martinez",
            "direccion": "Calle 6",
            "telefono": "1234567890",
            "transporte": "TAXI",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": false,
        },
        {
            "id_trabajador": 7,
            "nombre_completo": "Luis Hernandez",
            "direccion": "Calle 7",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 8,
            "nombre_completo": "Jorge Torres",
            "direccion": "Calle 8",
            "telefono": "1234567890",
            "transporte": "TAXI",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 9,
            "nombre_completo": "Diana Sanchez",
            "direccion": "Calle 9",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 10,
            "nombre_completo": "Rosa Flores",
            "direccion": "Calle 10",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 11,
            "nombre_completo": "Ramon Mendoza",
            "direccion": "Calle 11",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        },
        {
            "id_trabajador": 12,
            "nombre_completo": "Fernanda Reyes",
            "direccion": "Calle 12",
            "telefono": "1234567890",
            "transporte": "VAN",
            "tipo_empresa": "TP",
            "estado": true,
            "viaje_ida": true,
            "viaje_vuelta": true,
        }
    ]

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
                <Lista trabajadores={trabajadores} />
            </div>
        </div>
    )
}

export default Dashboard