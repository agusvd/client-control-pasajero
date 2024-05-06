import { useContext, createContext, useState } from "react";
import { LuSearch } from "react-icons/lu";

const SearchContext = createContext();

export default function Search({ children }) {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <div className="flex gap-1 bg-white p-2 rounded-md w-1/2 transition-all shadow border items-center text-clip pl-2">
                <LuSearch size={25} className='text-black' />
                {children}
            </div>
        </SearchContext.Provider>
    );
}

export function SearchItem({ text, onChange }) {

    return (
        <input
            onChange={onChange}
            className={`p-2 bg-white text-black placeholder:text-black text-start rounded-lg transition-all ease-in-out duration-300 text-sm text-nowrap w-full outline-none`}
            placeholder={text}
        />
    );
}