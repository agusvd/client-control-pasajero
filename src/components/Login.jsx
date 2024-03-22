import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import icono from '../assets/logo_colour.svg'

const Login = () => {
    const navigate = useNavigate()
    // usuarios de prueba
    const usuarios = [
        {
            id: 1,
            nombre: 'agustin',
            password: '123',
            role: 'admin'
        },
        {
            id: 2,
            nombre: 'juan',
            password: '123',
            role: 'chofer'
        }
    ]

    // verificar role
    const verificarRole = (e) => {
        e.preventDefault() // evitar que el formulario recargue la pagina
        const nombre = e.target[0].value
        const password = e.target[1].value
        const usuario = usuarios.find(usuario => usuario.nombre === nombre && usuario.password === password)
        if (usuario) {
            if (usuario.role === 'admin') {
                console.log('admin')
                toast.success('Bienvenido Administrador', {
                    duration: 1000,
                    position: 'top-right',
                })
                setTimeout(() => {
                    navigate('/admin')
                }, 1500);
            } else if (usuario.role === 'chofer') {
                console.log('chofer')
                toast.success('Bienvenido Chofer', {
                    duration: 1000,
                    position: 'top-right',
                })
                setTimeout(() => {
                    navigate('/checklist')
                }, 1500);
            } else {
                console.log('usuario no tiene role')
                toast.error('Usuario no tiene role', {
                    duration: 1000,
                    position: 'top-right',
                })
            }
        } else {
            console.log('usuario no encontrado')
            toast.error('Usuario no encontrado', {
                duration: 1000,
                position: 'top-right',
            })
        }
    }


    return (
        <div className='h-screen fondo-main font-primary backdrop:blur-sm'>
            <Toaster />
            <div className='flex justify-center items-center h-full bg-white/30'>
                <div className='bg-white shadow-xl m-4 sm:w-[500px] w-full p-4 rounded-md'>
                    <div className='flex items-center justify-center'>
                        <img src={icono} className='w-[50%]' />
                    </div>
                    <form onSubmit={verificarRole} className='flex flex-col gap-4'>
                        <div>
                            <p className='text-md pl-1'>Usuario</p>
                            <div className='border-2 rounded-md p-2'>
                                <input type='text' placeholder='Usuario' className='w-full h-full outline-none' />
                            </div>
                        </div>
                        <div>
                            <p className='text-md pl-1'>Contraseña</p>
                            <div className='border-2 rounded-md p-2'>
                                <input type='password' placeholder='Password' className='w-full h-full outline-none' />
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button
                                type='submit'
                                className='bg-black text-white w-full p-2 rounded-md h-full hover:bg-[#202020] duration-300 ease-in-out'>
                                Iniciar Sesion
                                <BsArrowRightShort size={30} className='inline-block ' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login