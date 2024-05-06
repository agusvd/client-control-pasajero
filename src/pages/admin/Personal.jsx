import React, { useState } from 'react';
import Menu, { MenuItem } from '../../components/Menu';
import Trabajadores from '../../components/Tablas/Trabajadores';
import Conductores from '../../components/Tablas/Conductores';
import { LuPlusSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Vehiculos from '../../components/Tablas/Vehiculos';
import NavBar from '../../components/Nav/NavBar';
import Lista from '../../components/Tablas/Lista';


const Personal = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-h-screen w-full font-primary bg-gray-100'>
            <NavBar />
            <div className='flex items-center justify-center sm:justify-between pt-3'>
                <Menu>
                    <MenuItem text='Vista previa' number={1} changePage={changePage} />
                    <MenuItem text='Trabajadores' number={2} changePage={changePage} />
                    <MenuItem text='Conductores' number={3} changePage={changePage} />
                    <MenuItem text='Vehiculos' number={4} changePage={changePage} />
                </Menu>
                <div className='pr-4'>
                    <div className="dropdown dropdown-bottom dropdown-end bg-white rounded-xl p-1 shadow border hover:bg-gray-100 duration-300 ease-in-out">
                        <div role="button" tabindex="0" className="p-1 rounded-lg transition-colors  flex items-center gap-2 text-zinc-700 text-sm font-semibold">
                            <LuPlusSquare size={20} />
                            Nuevo
                        </div>
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
            </div>

            {currentPage === 1 && <Lista />}
            {currentPage === 2 && <Trabajadores />}
            {currentPage === 3 && <Conductores />}
            {currentPage === 4 && <Vehiculos />}
        </div>
    )
}

export default Personal;
