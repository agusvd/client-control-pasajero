import React, { useState, useEffect } from 'react';
import Menu, { MenuItem } from '../../components/Menu';
import Nav, { NavItem } from '../../components/Nav';
import Trabajadores from '../../components/Trabajadores';
import Conductores from '../../components/Conductores';
import { LuPlusSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Vehiculos from '../../components/Vehiculos';


const Personal = () => {

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

    const conductores = [
        {
            "id_conductor": 1,
            "nombre_completo": "Conductor 1",
            "telefono": "1234567890",
            "vehiculo": "VAN-1",
        },
        {
            "id_conductor": 2,
            "nombre_completo": "Conductor 2",
            "telefono": "1234567890",
            "vehiculo": "VAN-2",
        },
        {
            "id_conductor": 3,
            "nombre_completo": "Conductor 3",
            "telefono": "1234567890",
            "vehiculo": "TAXI-1",
        },
        {
            "id_conductor": 4,
            "nombre_completo": "Conductor 4",
            "telefono": "1234567890",
            "vehiculo": "TAXI-2",
        },
    ]

    const vehiculos = [
        {
            "id_vehiculo": 1,
            "nombre": "VAN-1",
            "patente": "ABC-123",
            "capacidad": 10,
        },
        {
            "id_vehiculo": 2,
            "nombre": "VAN-2",
            "patente": "DEF-456",
            "capacidad": 10,
        },
        {
            "id_vehiculo": 3,
            "nombre": "TAXI-1",
            "patente": "GHI-789",
            "capacidad": 4,
        },
        {
            "id_vehiculo": 4,
            "nombre": "TAXI-2",
            "patente": "JKL-012",
            "capacidad": 4,
        },
    ]


    return (
        <div className='min-h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/reportes' text='Reportes' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>
            <div className='flex w-full justify-between border-b border-[#27272A]'>
                <div className='flex gap-2 justify-start'>
                    <h1 className='text-4xl font-semibold pl-4 pt-6 text-[#FAFAFA]'>
                        Personal
                    </h1>
                    <Menu>
                        <MenuItem text='Trabajadores' number={1} changePage={changePage} />
                        <MenuItem text='Conductores' number={2} changePage={changePage} />
                        <MenuItem text='Vehiculos' number={3} changePage={changePage} />
                    </Menu>
                </div>
                <div className='pr-4 items-center flex'>
                    <div className="dropdown dropdown-bottom dropdown-end hover:bg-none">
                        <button className="p-2 rounded-lg transition-colors text-[#0A0A0B] flex items-center gap-2 bg-[#FAFAFA] hover:bg-slate-100">
                            Nuevo<LuPlusSquare size={25} />
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#0A0A0B] gap-2 border border-[#27272A]">
                            <Link to='/panel/personal/nuevo-trabajador'
                                className="text-[#FAFAFA] p-1 hover:bg-[#27272A] rounded-md transition-colors">Nuevo Trabajador</Link>
                            <Link to='/panel/personal/nuevo-conductor'
                                className="text-[#FAFAFA] p-1 hover:bg-[#27272A] rounded-md transition-colors">Nuevo Conductor</Link>
                        </ul>
                    </div>
                </div>
            </div>

            {currentPage === 1 && <Trabajadores trabajadores={trabajadores} />}
            {currentPage === 2 && <Conductores conductores={conductores} />}
            {currentPage === 3 && <Vehiculos vehiculos={vehiculos} />}
        </div>
    )
}

export default Personal;
