import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trabajadores = () => {

    const [selectedTrabajador, setSelectedTrabajador] = useState(null);
    const [trabajadores, setTrabajadores] = useState([]);

    // peticion get
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/dashboard/trabajadores')
            .then((res) => {
                setTrabajadores(res.data)
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

    // funcion para eliminar trabajador
    const eliminarTrabajador = (id_trabajador) => {
        axios
            .delete(`http://localhost:3000/api/dashboard/trabajadores/${id_trabajador}`)
            .then((res) => {
                toast.success(res.data.message);
                setTrabajadores(trabajadores.filter((v) => v.id_trabajador !== id_trabajador));
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
    const handleDelete = (trabajador) => {
        setSelectedTrabajador(trabajador);
        if (selectedTrabajador) {
            toast((t) => (
                <div className='flex gap-2 bg-[#0A0A0B] w-full'>
                    <p className='text-wrap'>¿Seguro que quiere eliminar a <b>{trabajador.nombre_completo}?</b></p>
                    <button
                        onClick={() => eliminarTrabajador(trabajador.id_trabajador)}
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
            <div className='border rounded-lg overflow-auto border-gray-200]'>
                <table className="table-auto min-w-full">
                    <thead className='text-[#0A0A0B] bg-white border-b border-gray-200'>
                        <tr>
                            <th className="px-4 py-2 text-start">Nombre</th>
                            <th className="px-4 py-2 text-start">Direccion</th>
                            <th className="px-4 py-2 text-start">Telefono</th>
                            <th className="px-4 py-2 text-start">Tipo Empresa</th>
                            <th className="px-4 py-2 text-start">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.length === 0 && (
                            <tr>
                                <td colSpan='5' className='text-center text-[#0A0A0B]'>No hay trabajadores</td>
                            </tr>
                        )}
                        {trabajadores.map((trabajador) => (
                            <tr
                                key={trabajador.id_trabajador}
                                className='hover:bg-[#F4F4F5]  transition-colors'>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.nombre_completo}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.direccion}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.telefono}</td>
                                <td className="px-4 py-2 text-[#0A0A0B]">{trabajador.tipo_empresa}</td>
                                <td className="px-4 py-2 text-[#0A0A0B] gap-2 flex">
                                    <Link to={`/panel/personal/editar-trabajador/${trabajador.id_trabajador}`} className='text-white bg-[#0a0a0b] p-2 rounded-lg hover:bg-zinc-800 transition-colors'>Editar</Link>
                                    <button
                                        onClick={() => handleDelete(trabajador)}
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

export default Trabajadores