import React from 'react'
import AddPage from '../addpage'
import AdminPage from '../../components/adminPage'
import { Helmet } from 'react-helmet-async'

const Admin = () => {
  return (
    <>
    <Helmet>
        <title>Admin</title>
    </Helmet>
    <main>
        <AdminPage/>
    </main>
    </>
  )
}

export default Admin