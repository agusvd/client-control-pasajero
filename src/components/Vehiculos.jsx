import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vehiculos = () => {

    const [vehiculos, setVehiculos] = useState([]);
    // peticion get
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/dashboard/vehiculos')
            .then((res) => {
                setVehiculos(res.data)
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 401) {
                        toast.error(data.message || 'No autorizado');
                    } else {
                        toast.error('Error desconocido');
                    }
                }
            });
    }, [])

    // funcion para eliminar vehiculo

    const eliminarVehiculo = (id_vehiculo) => {
        axios
            .delete(`http://localhost:3000/api/dashboard/vehiculos/${id_vehiculo}`)
            .then((res) => {
                toast.success(res.data.message);
                setVehiculos(vehiculos.filter((v) => v.id_vehiculo !== id_vehiculo));
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 400) {
                        toast.error(data.message || 'Error al eliminar el vehiculo');
                    } else {
                        toast.error('Error de red');
                    }
                }
            });
    }

    const [selectedVehiculo, setSelectedVehiculo] = useState(null);


    // confirmar eliminacion
    const handleDelete = (vehiculo) => {
        setSelectedVehiculo(vehiculo);
        if (selectedVehiculo) {
            toast((t) => (
                <div className='flex gap-2 bg-[#0A0A0B] w-full'>
                    <p className='text-wrap'>¿Seguro que quiere eliminar a <b>{vehiculo.nombre}?</b></p>
                    <button
                        onClick={() => eliminarVehiculo(vehiculo.id_vehiculo)}
                        className='border-[#27272a] border text-[#FAFAFA] p-2 rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                        Sí
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className='border-[#27272a] border text-[#FAFAFA] p-2 rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                        No
                    </button>
                </div>
            ), {
                icon: '😳',
                style: {
                    border: '1px solid #27272A',
                    borderRadius: '30px',
                    padding: '16px',
                    color: '#FAFAFA',
                    background: '#0A0A0B',
                },
                duration: 10000,
            },);
        }
    };

    return (
        <div className='min-h-screen w-full p-4'>
            <Toaster />
            <div className='border rounded-lg shadow overflow-auto border-gray-200'>
                <table className="table-auto min-w-full">
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className="px-4 py-2 text-start"></th>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">patente</th>
                            <th className="px-4 py-2 text-start">Capacidad</th>
                            <th className="px-4 py-2 text-start">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculos.length === 0 && (
                            <tr>
                                <td className='text-center' colSpan={4}>No hay vehiculos</td>
                            </tr>
                        )}
                        {vehiculos.map((vehiculo, index) => (
                            <tr
                                key={vehiculo.id_vehiculo}
                                className='hover:bg-[#F4F4F5] transition-colors'>
                                <td className='px-4 py-2 text-[#0A0A0B]'>{index + 1}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{vehiculo.nombre}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{vehiculo.patente}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{vehiculo.capacidad}</td>
                                <td className="px-4 py-2 text-[#0A0A0B] gap-2 flex">
                                    <Link to={`/panel/personal/editar-vehiculo/${vehiculo.id_vehiculo}`} className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Editar</Link>
                                    <button
                                        onClick={() => handleDelete(vehiculo)}
                                        className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vehiculos