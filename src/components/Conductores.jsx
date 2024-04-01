import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Conductores = () => {

    const [selectedConductor, setSelectedConductor] = useState(null);

    const [conductores, setConductores] = useState([]);
    const [vehiculos, setVehiculos] = useState([]);

    // peticion get conductores
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/user/users/conductor')
            .then((res) => {
                setConductores(res.data)
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

        axios
            .get('http://localhost:3000/api/dashboard/vehiculos')
            .then((res) => {
                setVehiculos(res.data);
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

    // Obtener el nombre del vehículo
    const getVehiculoName = (id_vehiculo) => {
        const vehiculo = vehiculos.find((v) => v.id_vehiculo === id_vehiculo);
        return vehiculo ? vehiculo.nombre : 'Vehiculo no encontrado';
    };



    // funcion eliminar conductor
    const eliminarConductor = (id_conductor) => {
        axios
            .delete(`http://localhost:3000/api/user/users/chofer/${id_conductor}`)
            .then((res) => {
                toast.success(res.data.message);
                setConductores(conductores.filter((v) => v.id_conductor !== id_conductor));
            })
            .catch((error) => {
                if (error.response) {
                    const { status, data } = error.response;
                    if (status === 400) {
                        toast.error(data.message || 'Error al eliminar el trabajador');
                    } else {
                        toast.error('Error de red');
                    }
                }
            });
    }

    // confirmar eliminacion
    const handleDelete = (conductor) => {
        setSelectedConductor(conductor);
        if (selectedConductor) {
            toast((t) => (
                <div className='flex gap-2 bg-[#0A0A0B] w-full'>
                    <p className='text-wrap'>¿Seguro que quiere eliminar a <b>{conductor.nombre_completo}?</b></p>
                    <button
                        onClick={() => eliminarConductor(conductor.id_conductor)}
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
            <div className='border rounded-lg overflow-auto border-gray-200'>
                <table className="table-auto min-w-full">
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">Telefono</th>
                            <th className="px-4 py-2 text-start">Vehiculo</th>
                            <th className="px-4 py-2 text-start">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conductores.length === 0 && (
                            <tr>
                                <td colSpan={4} className='text-[#0A0A0B] text-center'>No hay conductores</td>
                            </tr>
                        )}
                        {conductores.map((conductor) => (
                            <tr
                                key={conductor.id_conductor}
                                className='hover:bg-[#F4F4F5] transition-colors'>
                                <td className="px-4 py-2 text-[#0A0A0B]">{conductor.nombre_completo}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{conductor.telefono}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{getVehiculoName(conductor.id_vehiculo)}</td>
                                <td className="px-4 py-2 text-[#0A0A0B] gap-2 flex">
                                    <Link to={`/panel/personal/editar-conductor/${conductor.id_conductor}`} className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Editar</Link>
                                    <button
                                        onClick={() => handleDelete(conductor)}
                                        className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800'>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Conductores