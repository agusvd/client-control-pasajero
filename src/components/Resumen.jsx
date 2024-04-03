import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LuPin } from "react-icons/lu";

const Resumen = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    const [activos, setActivos] = useState(0);
    const [inactivos, setInactivos] = useState(0);

    useEffect(() => {
        const fetchTrabajadores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/dashboard/trabajadores');
                setTrabajadores(response.data);
            } catch (error) {
                console.error('Error al obtener los trabajadores:', error);
            }
        };

        fetchTrabajadores();
    }, []);

    useEffect(() => {
        const contarTrabajadores = () => {
            const activosCount = trabajadores.filter(trabajador => trabajador.estado === 'activo').length;
            const inactivosCount = trabajadores.filter(trabajador => trabajador.estado === 'inactivo').length;
            setActivos(activosCount);
            setInactivos(inactivosCount);
        };

        contarTrabajadores();
    }, [trabajadores]);

    return (
        <div>
            <div className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-gray-200 tooltip shadow-md' data-tip="Trabajadores disponibles">
                <div className='flex justify-around w-full '>
                    <h1 className='text-[#0A0A0B] text-md'>Trabajadores</h1>
                    <LuPin size={20} className='text-[#0A0A0B]' />
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <p className='text-sm text-[#0A0A0B] font-semibold'> Activos: {activos}</p>
                    <p className='text-sm text-[#0A0A0B] font-semibold'> Inactivos: {inactivos}</p>
                </div>
            </div>
        </div>
    );
};

export default Resumen;
