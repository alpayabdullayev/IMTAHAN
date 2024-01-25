import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";

const DetailPage = () => {
  const [data, setdata] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const {basket,wishlist,addBasket,addWishlist,setbasket,setwishlist,removeBasket,handleCountVal} = useContext(GlobalContext)

  const { id } = useParams();

  async function getAllProduct() {
    try {
      const res = await axios.get(`http://localhost:3000/api/product/${id}`);
      setdata(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <section className="py-20 min-h-screen">
      <div className="wrapper">
        <div className="flex justify-center items-center">
          <h1 className="w-8/12 text-center [font-size:_clamp(2em,2vw,10em)] font-bold">
            Detail Page
          </h1>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {IsLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div>
                  <img src={data.image} alt="" />
                </div>
                <div className="flex flex-col gap-4 ">
                    <h1 className="w-8/12 [font-size:_clamp(2em,2vw,10em)] font-bold text-blue-800"> {data.name}</h1>
                    <p>Category : {data.category}</p>
                    <p>Description : {data.description}</p>
                    <p>
                        Price : {data.price}
                    </p>
                    <div className="flex gap-4 items-center ">
                    <div>
                        <button className="py-2 px-2 rounded-md bg-black text-white" onClick={() => addBasket(data)}>
                          <span>
                            <FaShoppingBag />
                          </span>
                        </button>
                      </div>
                      <div>
                        <button className="py-2 px-2 rounded-md bg-black" onClick={() => addWishlist(data)}>
                          {wishlist.find((x) => x._id === data._id) ? (
                            <span className="text-red-500">
                              <FaHeart />
                            </span>
                          ) : (
                            <span className="text-white">
                              <FaHeart />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
