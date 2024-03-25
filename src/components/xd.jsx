<div className='bg-white/30'>
                <nav className='w-full h-16'>
                    <div className='flex justify-start gap-4 items-center p-2 h-full'>
                        <button>
                            <FiMenu size={30} className='text-white' />
                        </button>
                        <h1 className='text-3xl text-white'></h1>
                    </div>
                </nav>
                <h2 className='text-center text-3xl font-semibold first-letter:uppercase text-white'>{fechaFormateada}</h2>
                {/* Cards de los trabajadores */}
                <div className='flex flex-col gap-4 items-center'>
                    {checklists.map(checklist => (
                        <div key={checklist.id} className='w-11/12 h-[300px] rounded-lg shadow-xl bg-white'>
                            <div className='flex justify-between items-center text-2xl first-letter:uppercase w-full p-2'>
                                {trabajadores.find(trabajador => trabajador.id === checklist.trabajadorId).nombre} {trabajadores.find(trabajador => trabajador.id === checklist.trabajadorId).apellido}
                            </div>
                            <div className='flex flex-col pt-2 p-1'>
                                <div className='flex justify-between p-1 items-center'>
                                    <p className='text-2xl  first-letter:uppercase'>
                                        {trabajadores.find(trabajador => trabajador.id === checklist.trabajadorId).direccion}
                                    </p>
                                    <button className='bg-black text-white rounded-lg p-1.5 text-xl'>
                                        Ver en mapa
                                    </button>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {/* Estado de la planta */}
                                    <button onClick={() => cambiarEstadoPlanta(checklist.id)} className={`text-xl p-2 rounded-lg w-full duration-300 ease-in-out transition-all ${checklist.estadoPlanta ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {checklist.estadoPlanta ? 'En planta' : 'No en planta'}
                                    </button>
                                    <button className='w-full bg-black text-white text-2xl rounded-lg p-2'>
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>