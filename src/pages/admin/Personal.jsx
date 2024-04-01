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

    return (
        <div className='min-h-screen w-full font-primary bg-white'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/reportes' text='Reportes' />
                <NavItem link='/panel/opciones' text='Opciones' />
            </Nav>
            <div className='pr-4 items-center flex justify-between'>
                <Menu>
                    <MenuItem text='Trabajadores' number={1} changePage={changePage} />
                    <MenuItem text='Conductores' number={2} changePage={changePage} />
                    <MenuItem text='Vehiculos' number={3} changePage={changePage} />
                </Menu>
                <div className="dropdown dropdown-bottom dropdown-end hover:bg-none">
                    <button className="p-2 rounded-lg transition-colors text-white flex items-center gap-2 bg-black hover:bg-zinc-800 shadow">
                        <LuPlusSquare size={25} />
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white gap-2 border border-gray-200">
                        <Link to='/panel/personal/nuevo-trabajador'
                            className="text-[#0A0A0B] p-1 hover:bg-[#F4F4F5] rounded-md transition-colors">Nuevo Trabajador
                        </Link>
                        <Link to='/panel/personal/nuevo-conductor'
                            className="text-[#0A0A0B] p-1 hover:bg-[#F4F4F5] rounded-md transition-colors">Nuevo Conductor
                        </Link>
                        <Link to='/panel/personal/nuevo-vehiculo'
                            className="text-[#0A0A0B] p-1 hover:bg-[#F4F4F5] rounded-md transition-colors">
                            Nuevo Vehiculo
                        </Link>
                    </ul>
                </div>
            </div>

            {currentPage === 1 && <Trabajadores />}
            {currentPage === 2 && <Conductores />}
            {currentPage === 3 && <Vehiculos  />}
        </div>
    )
}

export default Personal;
