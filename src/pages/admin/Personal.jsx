import React, { useState, useEffect } from 'react';
import Menu, { MenuItem } from '../../components/Menu';
import Nav, { NavItem } from '../../components/Nav';
import Trabajadores from '../../components/Trabajadores';
import { LuPlusSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';


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
    ]


    return (
        <div className='h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/Opciones' text='Opciones' />
            </Nav>
            <div className='pl-4 pr-4 pt-6 flex justify-between'>
                <h1 className='text-4xl font-semibold text-[#FAFAFA]'>
                    Personal
                </h1>
                <div>
                    <div className="dropdown dropdown-bottom dropdown-end hover:bg-none">
                        <button className="p-2 rounded-lg transition-colors text-[#0A0A0B] flex items-center gap-2 bg-[#FAFAFA] hover:bg-slate-100">
                            Nuevo<LuPlusSquare size={25}/>
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

            <Menu>
                <MenuItem text='Trabajadores' number={1} changePage={changePage} />
                <MenuItem text='Conductores' number={2} changePage={changePage}/>
            </Menu>

            {currentPage === 1 && <Trabajadores trabajadores={trabajadores} />}
            {currentPage === 2 && <h1>Conductores</h1>}
        </div>
    )
}

export default Personal;
