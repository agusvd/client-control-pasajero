import React from 'react'
import { LuBus, LuCar, LuX } from 'react-icons/lu'

const Resumen = () => {
    return (
        <>
            <button onClick={() => document.getElementById('valor-taxi').showModal()}
                className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-[#27272A] tooltip' data-tip="Cambiar valor">
                <div className='flex justify-around w-full '>
                    <h1 className='text-[#FAFAFA] text-md'>Valor Taxi</h1>
                    <LuCar size={20} className='text-[#fafafa]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-2xl text-zinc-100 font-semibold'>$15000 CLP</p>
                </div>
            </button>
            <dialog id='valor-taxi' className='modal bg-[#0A0A0B]/80'>
                <div className='bg-[#0A0A0B] p-1 rounded-xl border border-[#27272A]'>
                    <div className='flex justify-end w-full'>
                        <button onClick={() => document.getElementById('valor-taxi').close()} className=' p-1 hover:bg-[#27272A] rounded-xl'>
                            <LuX size={25} />
                        </button>
                    </div>
                    <form className='flex flex-col gap-4 p-4'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-[#FAFAFA]'>Valor Taxi</span>
                            <input type='number' placeholder='15000' className='rounded-md p-2 bg-[#0A0A0B] border border-[#27272A] text-[#FAFAFA]' />
                        </label>
                        <button className='bg-[#FAFAFA] text-[#0A0A0B] hover:bg-gray-200 transition-colors rounded-md p-2'>Guardar</button>
                    </form>
                </div>
            </dialog>
            <button onClick={() => document.getElementById('valor-van').showModal()} 
            className='flex flex-col justify-center items-center min-w-[200px] h-[100px] border rounded-xl gap-2 border-[#27272A] tooltip' data-tip="Cambiar valor">
                <div className='flex justify-around w-full'>
                    <h1 className='text-[#FAFAFA] text-md'>Valor VAN</h1>
                    <LuBus size={20} className='text-[#fafafa]' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-2xl text-zinc-100 font-semibold'>$53000 CLP</p>
                </div>
            </button>
            <dialog id='valor-van' className='modal bg-[#0A0A0B]/80'>
                <div className='bg-[#0A0A0B] p-1 rounded-xl border border-[#27272A]'>
                    <div className='flex justify-end w-full'>
                        <button onClick={() => document.getElementById('valor-van').close()} className=' p-1 hover:bg-[#27272A] rounded-xl'>
                            <LuX size={25} />
                        </button>
                    </div>
                    <form className='flex flex-col gap-4 p-4'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-[#FAFAFA]'>Valor VAN</span>
                            <input type='number' placeholder='530000' className='rounded-md p-2 bg-[#0A0A0B] border border-[#27272A] text-[#FAFAFA]' />
                        </label>
                        <button className='bg-[#FAFAFA] text-[#0A0A0B] hover:bg-gray-200 transition-colors rounded-md p-2'>Guardar</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Resumen