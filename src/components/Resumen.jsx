import React, {useState, useEffect} from 'react'
import { LuBus, LuCar, LuX } from 'react-icons/lu'
import axios from 'axios'

const Resumen = () => {
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
        <>
            <button onClick={() => document.getElementById('valor-taxi').showModal()}
                className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-gray-200 tooltip shadow-md' data-tip="Cambiar valor">
                <div className='flex justify-around w-full '>
                    <h1 className='text-[#0A0A0B] text-md'>Valor Taxi</h1>
                    <LuCar size={20} className='text-[#0A0A0B]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-2xl text-[#0A0A0B] font-semibold'>${valorTaxi} CLP</p>
                </div>
            </button>
            <dialog id='valor-taxi' className='modal bg-white/30'>
                <div className='bg-white p-1 rounded-xl border border-gray-200'>
                    <div className='flex justify-end w-full'>
                        <button onClick={() => document.getElementById('valor-taxi').close()} className=' p-1 hover:bg-gray-100 text-[#0A0A0B] rounded-xl'>
                            <LuX size={25} />
                        </button>
                    </div>
                    <form className='flex flex-col gap-4 p-4'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-[#0A0A0B]'>Valor Taxi</span>
                            <input type='number' name='valor-taxi' placeholder='15000'
                            onChange={(e) => setValorTaxi(e.target.value)}
                            className='rounded-md p-2 bg-white border border-gray-200 text-[#0A0A0B]' />
                        </label>
                        <button onClick={actualizarValorTaxi} className='bg-[#0A0A0B] text-white hover:bg-zinc-800 transition-colors rounded-md p-2'>Guardar</button>
                    </form>
                </div>
            </dialog>
            <button onClick={() => document.getElementById('valor-van').showModal()} 
            className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-gray-200 tooltip shadow-md' data-tip="Cambiar valor">
                <div className='flex justify-around w-full'>
                    <h1 className='text-[#0A0A0B] text-md'>Valor VAN</h1>
                    <LuBus size={20} className='text-[#0A0A0B]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-2xl text-[#0A0A0B] font-semibold'>${valorVan} CLP</p>
                </div>
            </button>
            <dialog id='valor-van' className='modal bg-white/30'>
                <div className='bg-white p-1 rounded-xl border border-gray-200'>
                    <div className='flex justify-end w-full'>
                        <button onClick={() => document.getElementById('valor-van').close()} className=' p-1 hover:bg-[#27272A] rounded-xl'>
                            <LuX size={25} />
                        </button>
                    </div>
                    <form className='flex flex-col gap-4 p-4'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-[#0A0A0B]'>Valor VAN</span>
                            <input type='number' name='valor-van' placeholder='530000'
                            onChange={(e) => setValorVan(e.target.value)}
                            className='rounded-md p-2 bg-white border border-gray-200 text-[#0A0A0B]' />
                        </label>
                        <button onClick={actualizarValorVan} className='bg-[#0A0A0B] text-white hover:bg-gray-200 transition-colors rounded-md p-2'>Guardar</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Resumen