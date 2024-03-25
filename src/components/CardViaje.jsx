// CardViaje.jsx

import React, { useState } from 'react';

const CardViaje = ({ trabajador, onInfoClick }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    return (
        <div className='px-2'>
            <div className='p-1 flex justify-between items-center bg-white shadow-md rounded-md h-[100px]'>
                <div className='flex flex-col justify-start gap-2 pl-3'>
                    <h1 className='text-xl font-bold text-black'>
                        {trabajador.nombre_completo}
                    </h1>
                    <div onClick={onInfoClick}
                        className='p-2 bg-black text-white rounded-md font-bold w-min'>
                        Informacion
                    </div>
                </div>
                <div className='flex items-center gap-2 pr-4'>
                    {
                        checked
                            ?
                            <div className='bg-green-500 p-1 rounded-md text-white font-bold w-[70px] text-center transition-all duration-500 ease-in-out'>
                                planta
                            </div>
                            :
                            <div className='bg-red-500 p-1 rounded-md text-white font-bold w-[70px] text-center transition-all duration-500 ease-in-out'>
                                hogar
                            </div>
                    }
                    <input onClick={handleCheck} type="checkbox" className="checkbox  checkbox-lg bg-white checked:checkbox-success border-gray-300" />
                </div>
            </div>
        </div>
    );
};

export default CardViaje;
