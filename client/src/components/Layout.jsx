import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout