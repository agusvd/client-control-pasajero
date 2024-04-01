import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Checklist = () => {
    const [trabajadorIda, setTrabajadorIda] = useState([]);
    const [trabajadorVuelta, setTrabajadorVuelta] = useState([]);
    const [chofer, setChofer] = useState({});
    const [auto, setAuto] = useState({});

    useEffect(() => {
        const obtenerDatos = async () => {

            const resIda = await axios.get('http://localhost:3000/api/chofer/viaje_ida');
            setTrabajadorIda(resIda.data);

            const resVuelta = await axios.get('http://localhost:3000/api/chofer/viaje_vuelta');
            setTrabajadorVuelta(resVuelta.data);


            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwtDecode(token);
                const id = decoded.id_conductor;
                console.log(id)
                if (id) {
                    const resChofer = await axios.get(`http://localhost:3000/api/user/users/conductor/${id}`);
                    setChofer(resChofer.data[0]);
                    console.log(resChofer.data[0])
                    if (resChofer.data[0].id_vehiculo) {
                        const resAuto = await axios.get(`http://localhost:3000/api/dashboard/vehiculos/${resChofer.data[0].id_vehiculo}`);
                        setAuto(resAuto.data[0]);
                    }
                } else {
                    console.log('No se encontró el id del conductor');
                }
            } else {
                console.log('No hay token');
            }
        }
        obtenerDatos();
    }, []);

    return (
        <div className='bg-white min-h-screen'>
            <Toaster />
            <div className='p-2'>
                <div className='border rounded-xl'>
                    <div className='bg-[#37B9D8] p-2 rounded-t-xl'>
                        <h1 className='text-white text-2xl font-bold text-center'>Bienvenido</h1>
                    </div>
                    <div className='p-2'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-2'>
                                <table>
                                    <tbody>
                                        <tr className='flex gap-2'>
                                            <td className='text-[#0A0A0B] font-semibold'>Nombre:</td>
                                            <td className='text-[#0A0A0B]'>{chofer.nombre_completo}</td>
                                        </tr>
                                        <tr className='flex gap-2'>
                                            <td className='text-[#0A0A0B] font-semibold'>Vehiculo:</td>
                                            <td className='text-[#0A0A0B]'>{auto.nombre}</td>
                                        </tr>
                                        <tr className='flex gap-2'>
                                            <td className='text-[#0A0A0B] font-semibold'>Patente:</td>
                                            <td className='text-[#0A0A0B]'>{auto.patente}</td>
                                        </tr>
                                        <tr className='flex gap-2'>
                                            <td className='text-[#0A0A0B] font-semibold'>Capacidad:</td>
                                            <td className='text-[#0A0A0B]'>{auto.capacidad} personas</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center pt-4'>
                <Link to='/inicio/lista-ida' className='text-white p-2 border rounded-xl text-3xl w-[300px] bg-[#37B9D8] text-center'>Lista a planta</Link>
                <Link to='/inicio/lista-vuelta' className='text-white p-2 border rounded-xl text-3xl w-[300px] bg-[#37B9D8] text-center'>Lista a hogar</Link>
            </div>
        </div>
    );
};

export default Checklist;