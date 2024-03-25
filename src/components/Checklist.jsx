import React, { useState } from 'react'
import CardViaje from './CardViaje'

const Checklist = () => {

    const [viaje, setViaje] = useState(1)

    const trabajadores = [
        {
            id_trabajador: 1,
            nombre_completo: 'Juan Perez',
            rut: '12.345.678-9',
            direccion: 'Manantiales 0143',
            telefono: '+56912345678',
            empresa: 'TP',
            transporte: 'VAN',
        },
        {
            id_trabajador: 2,
            nombre_completo: 'Vicente Vivar',
            rut: '12.345.678-9',
            direccion: 'Calle 2',
            telefono: '+56912345678',
            empresa: 'EST',
            transporte: 'VAN',
        },
        {
            id_trabajador: 3,
            nombre_completo: 'Agustin Villarroel',
            rut: '12.345.678-9',
            direccion: 'Calle 3',
            telefono: '+56912345678',
            empresa: 'TP',
            transporte: 'VAN',
        },
        {
            id_trabajador: 4,
            nombre_completo: 'Alfonso Villarroel',
            rut: '12.345.678-9',
            direccion: 'Calle 4',
            telefono: '+56912345678',
            empresa: 'EST',
            transporte: 'VAN',
        }
    ]


    return (
        <div className='bg-gray-100 h-full'>
            <div className='flex flex-col justify-center items-center pt-8'>
                <div className='bg-white flex gap-2 p-1.5 rounded-lg shadow'>
                    <button onClick={() => setViaje(1)}
                        className={`text-2xl p-2 rounded-md transition-all ease-in-out duration-300 
                        ${viaje === 1 ? 'bg-black text-white' : 'text-black'}`}>
                        Traslado planta
                    </button>
                    <button onClick={() => setViaje(2)}
                        className={` text-2xl p-2 rounded-md transition-all ease-in-out duration-300 
                        ${viaje === 2 ? 'bg-black text-white' : 'text-black'}`}>
                        Traslado hogar
                    </button>
                </div>
                {viaje === 1 && (
                    <form
                        className='transition-all ease-in-out duration-300 grid grid-cols-1 gap-4 w-full pt-8 p-2'>
                        {trabajadores.map(trabajador => (
                            <CardViaje
                                key={trabajador.id_trabajador}
                                trabajador={trabajador}
                                onInfoClick={() => handleInfoClick(trabajador)} />
                        ))}
                        <button className='bg-green-500 p-2 rounded-md text-white font-bold w-full text-center transition-all duration-500 ease-in-out'>
                            Enviar
                        </button>
                    </form>
                )}
                {viaje === 2 && (
                    <div
                        className='transition-all ease-in-out duration-300 pt-2 grid grid-cols-1 gap-3 w-full'>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Checklist;
