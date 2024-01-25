import React from 'react'
import BasketPage from '../../components/basketpage'
import { Helmet } from 'react-helmet-async'


const Basket = () => {
  return (
    <>
    <Helmet>
        <title>Basket PAge</title>
    </Helmet>
    <main>
        <BasketPage/>
    </main>
    </>
  )
}

export default Basket