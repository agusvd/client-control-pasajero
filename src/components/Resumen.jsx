import React from 'react'
import { LuBus, LuCar, LuX } from 'react-icons/lu'

const Resumen = () => {
    return (
        <>
            <button onClick={() => document.getElementById('valor-taxi').showModal()}
                className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-gray-200 tooltip shadow-md' data-tip="Cambiar valor">
                <div className='flex justify-around w-full '>
                    <h1 className='text-[#0A0A0B] text-md'>Valor Taxi</h1>
                    <LuCar size={20} className='text-[#0A0A0B]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-2xl text-[#0A0A0B] font-semibold'>$15000 CLP</p>
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
                            <input type='number' placeholder='15000' className='rounded-md p-2 bg-white border border-gray-200 text-[#0A0A0B]' />
                        </label>
                        <button className='bg-[#0A0A0B] text-white hover:bg-zinc-800 transition-colors rounded-md p-2'>Guardar</button>
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
                    <p className='text-2xl text-[#0A0A0B] font-semibold'>$53000 CLP</p>
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
                            <input type='number' placeholder='530000' className='rounded-md p-2 bg-white border border-gray-200 text-[#0A0A0B]' />
                        </label>
                        <button className='bg-[#0A0A0B] text-white hover:bg-gray-200 transition-colors rounded-md p-2'>Guardar</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Resumen