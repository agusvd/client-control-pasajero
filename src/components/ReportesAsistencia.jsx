import React, { useState } from 'react';
import { LuSearch } from "react-icons/lu";

const ReportesAsistencia = () => {
    return (
        <div className='pr-4 pl-4 flex flex-col gap-4 font-primary'>
            <div className='p-1 flex justify-between gap-4'>
                <div className='border border-gray-200 shadow bg-white p-2 rounded-xl w-1/3 flex gap-2 items-center focus:outline-gray-200'>
                    <LuSearch size={25} className='text-[#0A0A0B]' />
                    <input type='text' className='bg-white text-[#0A0A0B] outline-none text-sm w-full h-full focus:outline-gray-200 p-1 rounded' placeholder='Buscar...' />
                </div>
                <div className='border rounded-md px-1 py-1 bg-[#0A0A0B]'>
                    <input type='date' className='rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors' />
                    <button className='bg-white text-[#0A0A0B] font-semibold px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors'>
                        Buscar
                    </button>
                </div>
            </div>

            <div className='border rounded-xl border-gray-200 shadow-md w-full p-2'>
                <table className='table-auto w-full rounded-xl'>
                    <thead>
                        <tr>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'></th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Fecha</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Nombre</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Asistencia</th>
                            <th className='font-semibold text-[#0A0A0B] px-4 py-2 text-start'>Comentario</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        <tr className='text-[#0A0A0B] hover:bg-gray-50 transition-colors'>
                            <td className='px-4 py-2'>1</td>
                            <td className='px-4 py-2'>2021-10-10</td>
                            <td className='px-4 py-2'>Juan Perez</td>
                            <td className='px-4 py-2'>Presente</td>
                            <td className='px-4 py-2'>Comentario</td>
                        </tr>
                        <tr className='text-[#0A0A0B] hover:bg-gray-50 transition-colors'>
                            <td className='px-4 py-2'>2</td>
                            <td className='px-4 py-2'>2021-10-10</td>
                            <td className='px-4 py-2'>Juan Perez</td>
                            <td className='px-4 py-2'>Ausente</td>
                            <td className='px-4 py-2'>Comentario</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportesAsistencia