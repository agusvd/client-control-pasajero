import React, { useState, useEffect } from 'react';
import { LuBus, LuCar, LuPersonStanding, LuX } from 'react-icons/lu';
import axios from 'axios';

// Componente de Diálogo
const Dialogo = ({ id, valor, setValor, actualizarValor }) => {
    return (
        <dialog id={id} className='modal bg-white/30'>
            <div className='bg-white p-1 rounded-xl border border-gray-200'>
                <div className='flex justify-end w-full'>
                    <button onClick={() => document.getElementById(id).close()} className='p-1 hover:bg-gray-100 text-[#0A0A0B] rounded-xl'>
                        <LuX size={25} />
                    </button>
                </div>
                <form className='flex flex-col gap-4 p-4'>
                    <label className='flex flex-col gap-2'>
                        <span className='text-[#0A0A0B]'>Valor</span>
                        <input
                            type='number'
                            name={id}
                            placeholder='15000'
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                            className='rounded-md p-2 bg-white border border-gray-200 text-[#0A0A0B]'
                        />
                    </label>
                    <button onClick={actualizarValor} className='bg-[#0A0A0B] text-white hover:bg-zinc-800 transition-colors rounded-md p-2'>Guardar</button>
                </form>
            </div>
        </dialog>
    );
};

// Componente de Botón
const Boton = ({ id, icono, valor, showModal }) => {
    return (
        <button onClick={showModal} className='flex flex-col justify-center items-center w-[200px] h-[100px] border rounded-xl gap-2 border-gray-200 tooltip shadow-md' data-tip="Cambiar valor">
            <div className='flex justify-around w-full'>
                <h1 className='text-[#0A0A0B] text-md'>{id}</h1>
                {icono}
            </div>
            <div className='flex justify-center items-center w-full'>
                <p className='text-2xl text-[#0A0A0B] font-semibold'>${valor} CLP</p>
            </div>
        </button>
    );
};

// Componente Valores
const Valores = () => {
    const id = 1;

    // Estados para almacenar los valores de Valor Taxi y Valor VAN
    const [valorTaxi, setValorTaxi] = useState('');
    const [valorVan, setValorVan] = useState('');

    // Obtener valor de Valor Taxi desde la API al cargar el componente
    useEffect(() => {
        const obtenerValorTaxi = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/dashboard/valor-taxi/${id}`);
                setValorTaxi(res.data[0].valor);
            } catch (error) {
                console.error('Error al obtener el valor de Valor Taxi:', error);
            }
        };
        obtenerValorTaxi();
    }, []);

    // Obtener valor de Valor VAN desde la API al cargar el componente
    useEffect(() => {
        const obtenerValorVan = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/dashboard/valor-van/${id}`);
                setValorVan(res.data[0].valor);
            } catch (error) {
                console.error('Error al obtener el valor de Valor VAN:', error);
            }
        };
        obtenerValorVan();
    }, []);

    // Actualizar valor de Valor Taxi en la base de datos
    const actualizarValorTaxi = async () => {
        try {
            await axios.put(`http://localhost:3000/api/dashboard/valor-taxi/${id}`, { valor: valorTaxi });
        } catch (error) {
            console.error('Error al actualizar el valor de Valor Taxi:', error);
        }
    };

    // Actualizar valor de Valor VAN en la base de datos
    const actualizarValorVan = async () => {
        try {
            await axios.put(`http://localhost:3000/api/dashboard/valor-van/${id}`, { valor: valorVan });
        } catch (error) {
            console.error('Error al actualizar el valor de Valor VAN:', error);
        }
    };



    return (
        <div className='flex gap-2'>
            <Boton id='Valor Taxi' icono={<LuCar size={20} className='text-[#0A0A0B]' />} valor={valorTaxi} showModal={() => document.getElementById('valor-taxi').showModal()} />
            <Dialogo id='valor-taxi' valor={valorTaxi} setValor={setValorTaxi} actualizarValor={actualizarValorTaxi} />
            <Boton id='Valor VAN' icono={<LuBus size={20} className='text-[#0A0A0B]' />} valor={valorVan} showModal={() => document.getElementById('valor-van').showModal()} />
            <Dialogo id='valor-van' valor={valorVan} setValor={setValorVan} actualizarValor={actualizarValorVan} />
        </div>
    );
};

export default Valores;
