import React, {useState} from 'react'
import { FiLogOut, FiMenu } from "react-icons/fi";


const NavMobile = () => {

    const [opciones, setOpciones] = useState(false)

    const mostrarOpciones = () => {
        setOpciones(!opciones)
    }

    return (
        <div className='w-full h-[50px] bg-transparent absolute bottom-0 border-t-2 font-primary'>
            <div className='flex justify-around items-center h-full bg-[#202020]'>
                <button>
                    <FiLogOut size={30} className='text-white' />
                </button>
                <button>
                    <FiMenu onClick={mostrarOpciones} size={30} className='text-white' />
                </button>
            </div>
            {opciones && (
                <div className='w-full h-[100px] bottom-12 bg-[#202020] fixed'>
                    <button className='text-white w-full h-1/2'>
                        Lista IDA
                    </button>
                    <button className='text-white w-full h-1/2'>
                        Lista VUELTA
                    </button>
                </div>
            )}
        </div>
    )
}

export default NavMobile