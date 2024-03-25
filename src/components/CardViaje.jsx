import React, { useState } from 'react';
import { MdInfo } from "react-icons/md";
import maps from '../assets/maps.png';

const CardViaje = ({ trabajador }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const openInGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trabajador.direccion)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <div className='px-2'>
            <div className='p-1 flex justify-between items-center bg-white shadow-md rounded-md h-[80px]'>
                <div className='flex justify-start gap-2 items-center'>
                    <button type='button' onClick={toggleModal}
                        className='text-black rounded-md font-bold'>
                        <MdInfo size={40} />
                    </button>
                    <h1 className='text-md font-bold text-black'>
                        {trabajador.nombre_completo}
                    </h1>


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
                    <input
                        type="checkbox"
                        onClick={handleCheck}
                        className="checkbox checkbox-lg bg-white checked:border-green-500 [--chkbg:theme(colors.green.500)] [--chkfg:white]" />
                </div>
            </div>
            {modalOpen && (
                <div className="absolute top-0 left-0 flex items-center justify-center z-50 h-screen bg-black/50 w-full">
                    <div className="bg-white p-4 rounded-lg shadow-xl w-3/4">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-xl text-black font-bold">Información</h2>
                            <button onClick={toggleModal} className="text-gray-500 hover:text-black focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-800 mb-2">{trabajador.telefono}</p>
                        <p className="text-gray-800 mb-4">{trabajador.direccion}</p>
                        <div className='w-full justify-center items-center flex'>
                            <button type='button' onClick={openInGoogleMaps} className="bg-white shadow-md rounded-md text-black font-bold py-2 px-4 flex items-center ">
                                <img src={maps} />
                                Abrir en Google Maps
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CardViaje;
