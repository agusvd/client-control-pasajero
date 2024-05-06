import { useContext, createContext, useState } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <div className="pr-4 pl-4">
            <MenuContext.Provider value={{ activeItem, setActiveItem }}>
                <div className="flex gap-1 bg-white p-1 rounded-xl w-min transition-all shadow text-nowrap">
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
            className={`p-2 rounded-lg transition-all ease-in-out duration-300 text-sm text-center font-semibold  whitespace-nowrap ${activeItem === number ? 'bg-gray-100 text-black' : 'text-black hover:bg-gray-100 ease-in-out duration-300'}`}>
            {text}
        </button>
    );
}
