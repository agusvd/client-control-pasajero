import { useContext, createContext, useState } from "react";
import { LuDownload } from "react-icons/lu";

const DateContext = createContext();

export default function DatePicker({ children }) {

    const [date, setDate] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <DateContext.Provider value={{ date, setDate }}>
            <div className='border rounded-md px-1 py-1 bg-[#0A0A0B] flex items-center'>
                {children}
                <button
                    className="bg-white text-[#0A0A0B] font-semibold px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors">
                    <LuDownload size={20} />
                </button>
            </div>
        </DateContext.Provider>
    );
}

export function DatePickerItem({ onChange }) {
    const { date, setDate } = useContext(DateContext);

    const handleChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <>
            <input type='date' className='rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors' onChange={onChange} />
            <input type='date' className='rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors' onChange={onChange} />
        </>
    );
}
