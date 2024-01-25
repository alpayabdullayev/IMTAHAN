import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Footer from './footer';

const Layout = () => {
  return (
<>
<Toaster/>
<Navbar/>

<Outlet/>
<Footer/>

</>
  )
}

export default Layout