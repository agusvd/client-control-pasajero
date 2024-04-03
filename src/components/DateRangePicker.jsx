import React, { useState } from 'react';
import { format } from 'date-fns';
import { LuDownload } from "react-icons/lu";


const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDownload = () => {
        // Aquí puedes implementar la lógica para descargar basada en el rango de fechas seleccionado
        // Por ejemplo, podrías llamar a una función que realiza una solicitud a un servidor para obtener datos entre las fechas seleccionadas
        console.log('Descargando datos desde', startDate, 'hasta', endDate);
    };

    return (

        <div className='flex items-center gap-2 border rounded-md px-1 py-1 bg-[#0A0A0B]'>
            <input
                type="date"
                className=" rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors"
                value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <input
                type="date"
                className="rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors"
                value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                onChange={(e) => setEndDate(new Date(e.target.value))}
            />
            <button
                className="bg-white text-[#0A0A0B] font-semibold px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors"
                onClick={handleDownload}
                disabled={!startDate || !endDate}
            >
                <LuDownload size={20}/>
            </button>
        </div>
    );
};

export default DateRangePicker;
