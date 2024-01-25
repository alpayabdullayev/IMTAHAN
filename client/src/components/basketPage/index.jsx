import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FaEye, FaHeart, FaShoppingBag, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const BasketPage = () => {
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
    <section className="py-20 min-h-screen">
      <div className="wrapper">
        <div className="flex justify-center items-center">
          <h1 className="w-8/12 text-center [font-size:_clamp(2em,2vw,10em)] font-bold">
            Basket Page
          </h1>
        </div>
        <div>
            {
                basket.length === 0 ? <p>Basket Bosdur</p> : ""
            }
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-10   md:grid-cols-2 lg:grid-cols-3">
            {basket &&
              basket.map((item) => (
                <div className="flex flex-col group gap-4" key={item._id}>
                  <div className=" overflow-hidden relative ">
                    <img
                      src={item.image}
                      alt=""
                      className=" h-60  object-cover w-full"
                    />
                    <div className=" absolute bottom-0  flex  left-0 right-0 justify-center gap-4 min-h-[60px]   bg-gray-200 items-center  opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible duration-300 group-hover:translate-y-0">
                      <div>
                        <button onClick={() => removeBasket(item._id)}>
                          <span>
                            <FaTrash />
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
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <button
                          className="py-2 px-2 bg-black text-white rounded-md"
                          onClick={() => handleCountVal(true, item)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex  gap-4">
                        <h5>Count : {item.count}</h5>
                        <h5>Total : {item.count * item.price}</h5>
                      </div>

                      <div>
                        <button
                          className="py-2 px-2 bg-black text-white rounded-md"
                          onClick={() => handleCountVal(false, item)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BasketPage;
