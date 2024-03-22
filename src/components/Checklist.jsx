import React, { useState } from 'react';
import { FiArrowLeft, FiLogOut, FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Checklist = () => {
    const trabajadores = [
        {
            id: 1,
            nombre: 'Agustin',
            apellido: 'Random',
            direccion: 'calle falsa 123',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        },
        {
            id: 2,
            nombre: 'Felipe',
            apellido: 'Random',
            direccion: 'calle falsa 312',
            rut: '98765432-1',
            tipoEmpresa: 'EST',
            tipoVehiculo: 'Taxi'
        },
        {
            id: 3,
            nombre: 'Juan',
            apellido: 'Random',
            direccion: 'calle falsa 213',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        },
        {
            id: 4,
            nombre: 'Pedro',
            apellido: 'Random',
            direccion: 'calle falsa 321',
            rut: '98765432-1',
            tipoEmpresa: 'EST',
            tipoVehiculo: 'VAN'
        },
        {
            id: 5,
            nombre: 'Pablo',
            apellido: 'Random',
            direccion: 'calle falsa 231',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        },
        {
            id: 6,
            nombre: 'Paco',
            apellido: 'Random',
            direccion: 'calle falsa 132',
            rut: '98765432-1',
            tipoEmpresa: 'EST',
            tipoVehiculo: 'VAN'
        },
        {
            id: 7,
            nombre: 'Pato',
            apellido: 'Random',
            direccion: 'calle falsa 213',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        },
        {
            id: 8,
            nombre: 'Pepito',
            apellido: 'Random',
            direccion: 'calle falsa 312',
            rut: '98765432-1',
            tipoEmpresa: 'EST',
            tipoVehiculo: 'VAN'
        },
        {
            id: 9,
            nombre: 'Panchito',
            apellido: 'Random',
            direccion: 'calle falsa 123',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        },
        {
            id: 10,
            nombre: 'Panchito',
            apellido: 'Random',
            direccion: 'calle falsa 123',
            rut: '12345678-9',
            tipoEmpresa: 'TP',
            tipoVehiculo: 'VAN'
        }
    ];

    const [checklists, setChecklists] = useState([
        {
            id: 1,
            fecha: '22-03-2024',
            trabajadorId: 1,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 2,
            fecha: '22-03-2024',
            trabajadorId: 2,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 3,
            fecha: '22-03-2024',
            trabajadorId: 3,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 4,
            fecha: '22-03-2024',
            trabajadorId: 4,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 5,
            fecha: '22-03-2024',
            trabajadorId: 5,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 6,
            fecha: '22-03-2024',
            trabajadorId: 6,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 7,
            fecha: '22-03-2024',
            trabajadorId: 7,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 8,
            fecha: '22-03-2024',
            trabajadorId: 8,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 9,
            fecha: '22-03-2024',
            trabajadorId: 9,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        },
        {
            id: 10,
            fecha: '22-03-2024',
            trabajadorId: 10,
            estadoCasa: true,
            estadoPlanta: false,
            nuevoEstado: '',
        }
    ]);

    const fechaActual = new Date();
    const opcionesDeFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFecha);

    const cambiarEstadoCasa = (checklistId) => {
        setChecklists(prevChecklists =>
            prevChecklists.map(checklist =>
                checklist.id === checklistId ? { ...checklist, estadoCasa: !checklist.estadoCasa } : checklist
            )
        );
    };

    const cambiarEstadoPlanta = (checklistId) => {
        setChecklists(prevChecklists =>
            prevChecklists.map(checklist =>
                checklist.id === checklistId ? { ...checklist, estadoPlanta: !checklist.estadoPlanta } : checklist
            )
        );
    };

    const [navMobile, setNavMobile] = useState(false);
    const toggleNavMobile = () => {
        console.log('click')
        setNavMobile(!navMobile);
    }
    return (
        <div className='h-screen fondo-main font-primary z-10'>
            <div className='bg-white/20 h-full backdrop-blur-md z-20'>
                <nav className='flex justify-center items-center p-4 border-b-2'>
                    <h1 className='text-white text-3xl font-light'>
                        Lista IDA
                    </h1>
                </nav>
                <NavMobile />
            </div>

        </div>
    )
};

export default Checklist;
