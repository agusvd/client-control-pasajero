import React, { useState, useEffect } from 'react'
import Nav, { NavItem } from './Nav'
import { jwtDecode } from "jwt-decode";

const NavBar = () => {

    // obtener el usuario de la sesion
    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        // obtener el usuario dentro del token
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token)
        const usuario = {
            nombre: decoded.nombre,
        }

        setUsuario(usuario)
    }, [])

    return (
        <Nav usuario={usuario}>
            <NavItem link='/panel' text='Panel' />
            <NavItem link='/panel/personal' text='Personal' />
            <NavItem link='/panel/reportes' text='Reportes' />
        </Nav>
    )
}

export default NavBar