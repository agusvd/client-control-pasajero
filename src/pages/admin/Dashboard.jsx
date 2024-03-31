import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nav, { NavItem } from '../../components/Nav'
import Menu, {MenuItem} from '../../components/Menu'
import Lista from '../../components/Lista'

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
    ]

    return (
        <div className='h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/Opciones' text='Opciones' />
            </Nav>
            <h1 className='text-4xl font-semibold pl-4 pt-6 text-[#FAFAFA]'>
                Panel
            </h1>
            <Menu>
                <MenuItem text='Resumen' number={1} changePage={changePage} />
                <MenuItem text='Lista' number={2} changePage={changePage}/>
                <MenuItem text='Viajes' number={3} changePage={changePage}/>
                <MenuItem text='Reportes' number={4} changePage={changePage} />
            </Menu>
            {currentPage === 1 && <h1 className='text-[#FAFAFA]'>Resumen</h1>}
            {currentPage === 2 && <Lista trabajadores={trabajadores} />}
            {currentPage === 3 && <h1 className='text-[#FAFAFA]'>Viajes</h1>}
            {currentPage === 4 && <h1 className='text-[#FAFAFA]'>Reportes</h1>}
        </div>
    )
}

export default Dashboard