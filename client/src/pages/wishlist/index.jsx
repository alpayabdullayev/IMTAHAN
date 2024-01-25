import React from 'react'
import WishlistPage from '../../components/wishlistPage'
import { Helmet } from 'react-helmet-async'

const Wishlist = () => {
  return (
    <>
    <Helmet>
        <title>
            Wishlist
        </title>
    </Helmet>
    <main>
        <WishlistPage/>
    </main>
    </>
  )
}

export default Wishlist