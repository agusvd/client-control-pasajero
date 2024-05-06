import React from 'react'
import { Link } from 'react-router-dom'

export default function BotonIcono({ icon, text, link }) {
    return (
        <Link to={link} className='flex items-center gap-2 p-2 bg-white text-[#0A0A0B] rounded-lg transition-colors hover:bg-gray-200 text-sm'>
            {icon}
            {text}
        </Link>
    )
}