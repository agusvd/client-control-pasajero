import React from 'react'
import { LuSearch } from "react-icons/lu";

const ReporteGeneral = () => {
    return (
        <div className='pr-4 pl-4 flex flex-col gap-4'>
            <div className='p-1 flex justify-between gap-4'>
                
                <div className='border border-gray-200 shadow bg-white p-2 rounded-xl w-1/3 flex gap-2 items-center'>
                    <LuSearch size={25} className='text-[#0A0A0B]' />
                    <input type='text' className='bg-white text-[#0A0A0B] outline-none text-sm' placeholder='Buscar...'/>
                </div>
                <div className='border border-gray-200 shadow bg-white p-2 rounded-xl flex gap-2 justify-around items-center'>
                    <input type='date' className='bg-white text-[#0A0A0B] outline-none'/>
                    <button className='bg-black text-white font-semibold px-2 py-1 rounded-md'>
                        Buscar
                    </button>
                </div>
            </div>
            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead className=''>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Fecha</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Conductor</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Trabajadores</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Destino</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Extra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-[#0A0A0B] px-4 py-2 text-start'>01/01/2022</td>
                            <td className='text-[#0A0A0B] px-4 py-2 text-start'>Conductor 1</td>
                            <td className='text-[#0A0A0B] px-4 py-2 text-start'>Trabajador 1</td>
                            <td className='text-[#0A0A0B] px-4 py-2 text-start'>Destino 1</td>
                            <td className='text-[#0A0A0B] px-4 py-2 text-start'>Extra 1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReporteGeneral