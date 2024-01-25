import React from 'react'
import DetailPage from '../../components/detailpage'
import { Helmet } from 'react-helmet-async'

const Detail = () => {
  return (
   <>
   <Helmet>
    <title>
        Detail
    </title>
   </Helmet>
    <main>
        <DetailPage/>
    </main>
   </>
  )
}

export default Detail