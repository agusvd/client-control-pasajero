import { useContext, createContext, useState } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <div className="p-4">
            <MenuContext.Provider value={{ activeItem, setActiveItem }}>
                <div className="flex gap-1 bg-black p-2 rounded-xl w-min transition-all shadow text-clip">
                    {children}
                </div>
            </MenuContext.Provider>
        </div>
    );
}

export function MenuItem({ text, number, changePage }) {
    const { activeItem, setActiveItem } = useContext(MenuContext);

    const handleClick = () => {
        setActiveItem(number);
        changePage(number)
    };

    return (
        <button
            onClick={handleClick}
            className={`p-2 text-[#0A0A0B] rounded-lg transition-all ease-in-out duration-300 text-sm text-center font-semibold ${activeItem === number ? 'bg-white shadow' : 'text-gray-300'}`}>
            {text}
        </button>
    );
}
