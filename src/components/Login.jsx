import React, {useState, useEffect} from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Logo from '../assets/logo_colour.svg'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


const Login = () => {

    // hook para redireccionar
    const navigate = useNavigate()
    // valores del formulario
    const [values, setValues] = useState({
        usuario: '',
        password: '',
    });


    axios.defaults.withCredentials = true;

    // Funcion para manejar el login
    const handleLogin = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3000/api/auth/login', {...values})
            .then((res) => {
                if (res.data.message == "Usuario autenticado") {
                    // obtener el token
                    const token = res.data.token
                    // decodificar el token
                    const decoded = jwtDecode(token)
                    // guardar el token en el localstorage
                    localStorage.setItem('token', token)
                    // redireccionar al usuario
                    if (decoded.admin) {
                        toast.success('Bienvenido administrador')
                        setTimeout(() => {
                            navigate('/admin')
                        }, 1500)
                    }
                    if (decoded.chofer) {
                        toast.success('Bienvenido')
                        setTimeout(() => {
                            navigate('/inicio')
                        }, 1500)
                    }
                    if (decoded.norole) {
                        toast.error('No tienes permisos')
                    }
                }
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 404) {
                        toast.error(data.message || 'Usuario no encontrado');
                    } else if (status === 403) {
                        toast.error(data.message || 'Contraseña incorrecta');
                    } else {
                        toast.error('Error de red');
                    }
                } else {
                    toast.error('Error de red');
                }
            })
    }

    return (
        <div className='h-screen fondo-main font-primary'>
            <Toaster />
            <div className='flex justify-center items-center h-full bg-white/30'>
                <div className='bg-white/80 shadow-xl m-4 sm:w-[500px] w-full p-4 rounded-md'>
                    <div className='flex items-center justify-center'>
                        <img src={Logo} className='w-[50%]' />
                    </div>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                        <div>
                            <p className='text-md pl-1 '>Usuario</p>
                            <div className='border-2 rounded-md p-2 bg-white/10'>
                                <input required onChange={(e) => setValues({ ...values, usuario: e.target.value })} 
                                type='text' placeholder='Usuario' className='w-full h-full outline-none bg-white/10 text-gray-700' />
                            </div>
                        </div>
                        <div>
                            <p className='text-md pl-1'>Contraseña</p>
                            <div className='border-2 rounded-md p-2 bg-white/10'>
                                <input required  onChange={(e) => setValues({ ...values, password: e.target.value })} 
                                type='password' placeholder='Password' className='w-full h-full outline-none bg-white/10 text-gray-700' />
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-full'>
                            <button type='submit'
                                className='bg-[#37B9D8] text-white w-full p-2 rounded-md h-full hover:bg-black duration-300 ease-in-out flex items-center justify-center'>
                                Iniciar Sesion
                                    <BsArrowRightShort size={30} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login