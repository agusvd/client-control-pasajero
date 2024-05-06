import { useContext, createContext, useState } from "react";
import { LuDownload } from "react-icons/lu";

const DateContext = createContext();

export default function DatePicker({ children }) {

    const [date, setDate] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <DateContext.Provider value={{ date, setDate }}>
            <div className=' bg-white text-black flex items-center shadow border rounded-md p-1'>
                {children}
                <button
                    className="font-semibold p-2 rounded-md hover:bg-gray-100 transition-colors">
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
            <input type='date' className='bg-white text-black rounded-md p-2 outline-none hover:bg-gray-100 transition-colors' onChange={onChange} />
            <input type='date' className='bg-white text-black rounded-md p-2 outline-none hover:bg-gray-100 transition-colors' onChange={onChange} />
        </>
    );
}
