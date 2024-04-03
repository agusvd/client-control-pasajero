import { useContext, createContext, useState } from "react";
import { LuSearch } from "react-icons/lu";

const SearchContext = createContext();

export default function Search({ children }) {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <div className="flex gap-1 bg-black p-1 rounded-xl w-1/3 transition-all shadow text-clip items-center">
                <LuSearch size={25} className='text-white' />
                {children}
            </div>
        </SearchContext.Provider>
    );
}

export function SearchItem({ text, onChange }) {
    const { search, setSearch } = useContext(SearchContext);

    return (
        <input
            onChange={onChange}
            className={`p-2 bg-black text-white text-start rounded-lg transition-all ease-in-out duration-300 text-sm font-semibold text-nowrap w-full`}
            placeholder={text}
        />
    );
}