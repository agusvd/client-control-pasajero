import { useContext, createContext, useState } from "react";

const DateContext = createContext();

export default function DatePicker({ children }) {

    const [date, setDate] = useState('');

    return (
        <DateContext.Provider value={{ date, setDate }}>
            <div className='border rounded-md px-1 py-1 bg-[#0A0A0B] flex items-center'>
                {children}
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
        <input type='date' className='rounded-md text-white px-2 outline-none bg-[#0A0A0B] hover:bg-zinc-800 transition-colors' onChange={onChange} />
    );
}
