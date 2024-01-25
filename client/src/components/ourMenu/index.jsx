import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../sectionTitle";
import { FaEye, FaHeart, FaShoppingBag } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const OurMenu = () => {
  const [data, setdata] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const {basket,wishlist,addBasket,addWishlist,setbasket,setwishlist} = useContext(GlobalContext)

  async function getAllProduct() {
    try {
      const res = await axios.get("http://localhost:3000/api/product");
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
    <section>
      <div className="wrapper">
        <SectionTitle children={" OUR MENU"} text={"Discover Our Exclusive Menu"} />
        <div className="py-10">
          <div className="flex  flex-wrap justify-center items-center gap-4">
            <div>
              <button className="py-3 px-4 bg-yellow-500 text-white">
                {" "}
                <span>
                  <i class="fa-solid fa-burger"></i>
                </span>{" "}
                Main
              </button>
            </div>
            <div>
              <button className="py-3 px-4 bg-yellow-500 text-white">
                {" "}
                <span>
                  <i class="fa-solid fa-cookie"></i>
                </span>{" "}
                Desert
              </button>
            </div>
            <div>
              <button className="py-3 px-4 bg-yellow-500 text-white">
                {" "}
                <span>
                  <i class="fa-solid fa-wine-glass-empty"></i>
                </span>{" "}
                Drinks
              </button>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid  grid-cols-1 items-center  lg:grid-cols-2  gap-10">
            {IsLoading ? (
              <p>Loading...</p>
            ) : (
              data &&
              data.map((item) => (
                <div
                  key={item._id}
                  className="flex  flex-wrap gap-4 justify-between hover:bg-yellow-500 duration-300  items-center shad shadow-xl py-4 px-4"
                >
                  <div className="flex gap-4 items-center ">
                    <div>
                      <img
                        className="h-14 w-14 rounded-full"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="text-sm">
                      <h1>{item.name}</h1>
                      <p>{item.category}</p>
                    </div>
                  </div>
                  <div className=" flex gap-4 items-center">
                    <h1>{item.price} $</h1>
                    <div>
                      <button onClick={()=>addBasket(item)}>
                        <span>
                          <FaShoppingBag />
                        </span>
                      </button>
                    </div>
                    <div>
                      <button onClick={()=>addWishlist(item)}>
                        {
                            wishlist.find((x)=>x._id === item._id) ? <span className="text-red-500">
                            <FaHeart />
                          </span> : <span>
                          <FaHeart />
                        </span>
                        }
                      </button>
                    </div>
                    <div>
                     <Link to={`/product/${item._id}`}> <button>
                        <span>
                          <FaEye />
                        </span>
                      </button></Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="py-20 flex justify-center flex-col gap-4  items-center">
            <h1 className="text-center">Even the all-powerful Pointing has no control about the blind texts it is an almost</h1>
            <div className=" border-yellow-500 border-2 duration-300  hover:bg-yellow-500 hover:text-black py-3 px-5 text-yellow-500">
                <button>MAKE A RESERVATION</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
