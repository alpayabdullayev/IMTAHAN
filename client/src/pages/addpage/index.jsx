import React from 'react'
import AddPageForm from '../../components/addPageForm'
import { Helmet } from 'react-helmet-async'

const AddPage = () => {
  return (
    <>
    <Helmet>
        <title>Add Page</title>
    </Helmet>
    <main>
        <AddPageForm/>
    </main>
    </>
  )
}

export default AddPage