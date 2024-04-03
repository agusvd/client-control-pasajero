import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavMobile from '../../components/NavMobile';
import { jwtDecode } from 'jwt-decode';
import { LuMessageSquare, LuInfo } from "react-icons/lu";
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import maps from '../../assets/maps.png';

const ListaVuelta = () => {
    const navigate = useNavigate();
    const [trabajadoresConMismoTransporte, setTrabajadoresConMismoTransporte] = useState([]);
    const [chofer, setChofer] = useState({});
    const [auto, setAuto] = useState({});
    const [personasEnviadas, setPersonasEnviadas] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState(null);
    const [comentariosPorTrabajador, setComentariosPorTrabajador] = useState({});

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const resVuelta = await axios.get('http://localhost:3000/api/chofer/viaje_vuelta');
                const trabajadores = resVuelta.data;
                setTrabajadoresConMismoTransporte(trabajadores);

                const token = localStorage.getItem('token');
                if (token) {
                    const decoded = jwtDecode(token);
                    const id = decoded.id_conductor;

                    if (id) {
                        const resChofer = await axios.get(`http://localhost:3000/api/user/users/conductor/${id}`);
                        setChofer(resChofer.data[0]);

                        // Obtener el auto del chofer
                        if (resChofer.data[0].id_vehiculo) {
                            const resAuto = await axios.get(`http://localhost:3000/api/dashboard/vehiculos/${resChofer.data[0].id_vehiculo}`);
                            setAuto(resAuto.data[0]);
                            // Filtrar los trabajadores que usan el mismo auto que el chofer
                            const trabajadoresConMismoAuto = trabajadores.filter(trabajador => trabajador.transporte === resAuto.data[0].nombre);
                            setTrabajadoresConMismoTransporte(trabajadoresConMismoAuto);
                        }
                    }
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        obtenerDatos();
    }, []);

    // Manejar la apertura del modal y establecer el trabajador seleccionado
    const toggleModal = (trabajador) => {
        setTrabajadorSeleccionado(trabajador);
        setModalOpen(!modalOpen);
    };

    const openInGoogleMaps = (trabajador) => {
        setTrabajadorSeleccionado(trabajador);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trabajadorSeleccionado.direccion)}`;
        window.open(googleMapsUrl, '_blank');
    };

    // Manejar el cambio de estado de los checkboxes
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

    // Manejar el cambio de comentario para cada trabajador
    const handleComentarioChange = (event, trabajadorId) => {
        const { value } = event.target;
        setComentariosPorTrabajador(prevState => ({
            ...prevState,
            [trabajadorId]: value
        }));
    };
    const handleEnviarClick = () => {
        const fechaActual = new Date().toISOString();
        const asistencias = {};
        const comentarios = {};
        trabajadoresConMismoTransporte.forEach(trabajador => {
            if (checkedItems[trabajador.id_trabajador]) {
                asistencias[trabajador.id_trabajador] = 'presente';
                comentarios[trabajador.id_trabajador] = comentariosPorTrabajador[trabajador.id_trabajador] || '';
            } else {
                asistencias[trabajador.id_trabajador] = 'ausente';
                comentarios[trabajador.id_trabajador] = comentariosPorTrabajador[trabajador.id_trabajador] || '';
            }
        });
        const values = {
            fecha: fechaActual,
            conductor: chofer.nombre_completo,
            vehiculo: auto.nombre,
            tipo_viaje: 'vuelta',
            trabajadores: trabajadoresConMismoTransporte.map(trabajador => trabajador.id_trabajador),
            asistencias,
            comentarios
        }
        console.log('Datos a enviar:', values);
        try {
            axios
                .post('http://localhost:3000/api/dashboard/traslados', {...values})
                .then((res) => {
                    toast.success(res.data.message || 'Asistencia enviada correctamente');
                    setTimeout(() => {
                        navigate('/inicio')
                    }, 1500)
                })
                .catch((error) => {
                    toast.error('Error al enviar los datos');
                })
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    }

    // al apretar el boton de enviar se debe mostrar un modal de confirmacion
    const confirmarEnviar = () => {
        toast((t) => (
            <div className='flex gap-2 bg-[#0A0A0B] w-full'>
                <p className='text-wrap'>¿Seguro que quiere enviar la asistencia?</p>
                <button
                    onClick={handleEnviarClick}
                    className='border-[#27272a] border text-[#FAFAFA] rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                    Sí
                </button>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className='border-[#27272a] border text-[#FAFAFA] p-2 rounded-lg hover:bg-[#FAFAFA] hover:text-[#0A0A0B] transition-colors text-sm px-3 py-1.5'>
                    No
                </button>
            </div>
        ), {
            icon: '🤔',
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

    return (
        <div className='min-h-screen w-full font-primary bg-gray-50'>
            <Toaster />
            <NavMobile />
            <div>
                <div className='p-2'>
                    <h3 className='text-[#0A0A0B] font-semibold text-2xl text-start pl-2'>Asistencia VUELTA - Planta</h3>
                </div>
                <ul className='flex flex-col gap-2 p-2'>
                    {trabajadoresConMismoTransporte.map(trabajador => (
                        <li key={trabajador.id_trabajador} className="flex flex-col gap-4 items-center justify-between shadow pl-4 pr-4 py-2 bg-white rounded-xl">
                            <div className="flex items-center gap-2 justify-between w-full">
                                <div className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        id={trabajador.id_trabajador}
                                        name={trabajador.id_trabajador}
                                        checked={checkedItems[trabajador.id_trabajador] || false}
                                        onChange={handleCheckboxChange}
                                        className="checkbox checkbox-lg bg-white checked:border-green-500 [--chkbg:theme(colors.green.500)] [--chkfg:white]"
                                    />
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <div>
                                        <p className="font-bold text-black">{trabajador.nombre_completo}</p>
                                        <p>{checkedItems[trabajador.id_trabajador]
                                            ?
                                            <span className='text-green-500'>Planta</span>
                                            :
                                            <span className='text-red-500'>Hogar</span>}
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <button type='button' onClick={() => toggleModal(trabajador)}>
                                            <LuInfo size={35} className='text-[#37B9D8]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full border rounded-full p-2 gap-2'>
                                <LuMessageSquare size={20} className='text-[#37B9D8]' />
                                <input
                                    type='text'
                                    placeholder='Comentario...'
                                    value={comentariosPorTrabajador[trabajador.id_trabajador] || ''}
                                    onChange={(e) => handleComentarioChange(e, trabajador.id_trabajador)}
                                    className='bg-white w-full outline-none text-sm text-[#0A0A0B]'
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='p-2 pt-6'>
                    <button onClick={confirmarEnviar}
                        className='bg-[#37B9D8] text-white font-bold p-2 rounded-md w-full mt-4 hover:bg-[#2E8CB3] focus:outline-none'>
                        Enviar
                    </button>
                </div>
            </div>
            {modalOpen && (
                <div className="absolute top-0 left-0 flex items-center justify-center z-50 h-screen bg-black/50 w-full">
                    <div className="bg-white p-4 rounded-lg shadow-xl w-3/4">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-xl text-black font-bold">Información</h2>
                            <button onClick={() => toggleModal(null)} className="text-gray-500 hover:text-black focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {trabajadorSeleccionado && (
                            <>
                                <p className="text-gray-800 mb-2">Teléfono: {trabajadorSeleccionado.telefono}</p>
                                <p className="text-gray-800 mb-4">Dirección: {trabajadorSeleccionado.direccion}</p>
                                <div className='w-full justify-center items-center flex'>
                                    <button onClick={openInGoogleMaps} type='button' className="bg-white shadow-md rounded-md text-black font-bold py-2 px-4 flex items-center ">
                                        <img src={maps} />
                                        Abrir en Google Maps
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListaVuelta;
