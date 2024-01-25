import React from 'react'
import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import toast, { Toaster } from 'react-hot-toast';

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    const [basket, setbasket] = useLocalStorage("basket")
    const [wishlist, setwishlist] = useLocalStorage("wishlist")

    function addBasket(item) {
        const elementIndex = basket.findIndex((x)=>x._id === item._id)

        if (elementIndex !==-1) {
            basket[elementIndex].count++
            setbasket([...basket])
            toast.success('Baskete Ugurla Elave Olundu!')

        }
        else{
            setbasket([...basket,{...item,count : 1}])
            toast.success('Baskete Ugurla Elave Olundu!')
        }
    }

    function removeBasket(id) {
       setbasket(basket.filter((x)=>x._id !== id)) 
    }

    function handleCountVal(isAdd,item) {
        const elementIndex = basket.findIndex((x)=>x._id === item._id)
        
        if (isAdd) {
            basket[elementIndex].count++
            setbasket([...basket])
        }
        else{
            if ( basket[elementIndex].count === 1) {
                setbasket(basket.filter((x)=>x._id !== item._id)) 
            }
            else{
                basket[elementIndex].count--
                setbasket([...basket])
            }
        }
    }

    function addWishlist(item) {
        const elementIndex = wishlist.findIndex((x)=>x._id === item._id)

        if (elementIndex !==-1) {
            setwishlist(wishlist.filter((x)=>x._id !== item._id))
            toast.success('Wishliste Ugurla Silindi!')

        }
        else{
            setwishlist([...wishlist,{...item}])
            toast.success('Wishliste Ugurla Elave Olundu!')

        }
        
    }

    

    const data = {
        basket,wishlist,addBasket,addWishlist,setbasket,setwishlist,removeBasket,handleCountVal
    }

  return (
    <>
    <GlobalContext.Provider value={data}> 
        {children}
    </GlobalContext.Provider>
    </>
  )
}

export default GlobalProvider