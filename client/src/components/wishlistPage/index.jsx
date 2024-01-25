import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalContext";
import { FaEye, FaHeart, FaShoppingBag, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishlistPage = () => {
    const {
        basket,
        wishlist,
        addBasket,
        addWishlist,
        setbasket,
        setwishlist,
        removeBasket,
        handleCountVal,
      } = useContext(GlobalContext);
  return (
   
    <>
 <section className="py-20 min-h-screen">
      <div className="wrapper">
        <div className="flex justify-center items-center">
          <h1 className="w-8/12 text-center [font-size:_clamp(2em,2vw,10em)] font-bold">
            Wishlist Page
          </h1>
        </div>
        <div>
            {
                wishlist.length === 0 ? <p>Wishlist Bosdur</p> : ""
            }
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-10   md:grid-cols-2 lg:grid-cols-3">
            {wishlist &&
              wishlist.map((item) => (
                <div className="flex flex-col group gap-4" key={item._id}>
                  <div className=" overflow-hidden relative ">
                    <img
                      src={item.image}
                      alt=""
                      className=" h-60  object-cover w-full"
                    />
                    <div className=" absolute bottom-0  flex  left-0 right-0 justify-center gap-4 min-h-[60px]   bg-gray-200 items-center  opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible duration-300 group-hover:translate-y-0">
                      <div>
                        <button onClick={() => addBasket(item)}>
                          <span>
                            <FaShoppingBag />
                          </span>
                        </button>
                      </div>
                      <div>
                        <button onClick={() => addWishlist(item)}>
                          {wishlist.find((x) => x._id === item._id) ? (
                            <span className="text-red-500">
                              <FaHeart />
                            </span>
                          ) : (
                            <span>
                              <FaHeart />
                            </span>
                          )}
                        </button>
                      </div>
                      <div>
                        <Link to={`/product/${item._id}`}>
                          {" "}
                          <button>
                            <span>
                              <FaEye />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  items-center gap-2 justify-center">
                    <h1 className=" [font-size:_clamp(1em,1vw,10em)] font-bold  text-blue-800">
                      {item.name}
                    </h1>
                    <p className="text-xl">
                      Price :
                      <span className="text-blue-800 font-semibold">
                        {item.price}$
                      </span>
                    </p>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WishlistPage