import { useContext, createContext, useState } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [activeItem, setActiveItem] = useState(1);

    return (
        <div className="p-4">
            <MenuContext.Provider value={{ activeItem, setActiveItem }}>
                <div className="flex gap-2 bg-[#27272A] p-2 rounded-xl w-min">
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
            className={`text-[#FAFAFA] p-2 hover:bg-[#0A0A0B] rounded-lg transition-colors text-sm ${activeItem === number ? 'bg-[#0A0A0B]' : ''}`}>
            {text}
        </button>
    );
}
