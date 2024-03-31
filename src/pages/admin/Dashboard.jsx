import React from 'react'
import Nav, { NavItem } from '../../components/Nav'
import Menu, {MenuItem} from '../../components/Menu'


const Dashboard = () => {
    return (
        <div className='h-screen w-full font-primary bg-[#0A0A0B]'>
            <Nav usuario='Agustin Villarroel'>
                <NavItem link='/panel' text='Panel' />
                <NavItem link='/panel/personal' text='Personal' />
                <NavItem link='/panel/Opciones' text='Opciones' />
            </Nav>
            <h1 className='text-4xl font-semibold pl-4 pt-6 text-[#FAFAFA]'>
                Panel
            </h1>
            <Menu>
                <MenuItem text='Resumen' number={1} />
                <MenuItem text='Viajes' number={2} />
                <MenuItem text='Reportes' number={3} />
            </Menu>
        </div>
    )
}

export default Dashboard