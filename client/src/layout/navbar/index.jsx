import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import "./index.scss";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const [IsClick, setIsClick] = useState(false);
  const { basket, wishlist } = useContext(GlobalContext);

  function hadnleClick() {
    setIsClick(!IsClick);
  }

  return (
    <>
      <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
        <div className="wrapper">
          <div className="flex justify-between items-center min-h-[72px]">
            <div>
              <h1 className="border border-white px-1 py-1">Tasty</h1>
            </div>
            <ul className="hidden font-bold md:flex  items-center gap-5">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/addpage"}>Addpage</NavLink>
              </li>
              <li>
                <NavLink to={"/admin"}>Admin</NavLink>
              </li>
            </ul>
            <ul className="flex  justify-between items-center gap-4">
              <li className=" relative">
                <NavLink to={"/basket"}>
                  <SlBasket />
                </NavLink>
                <span className=" w-4 h-4 bg-red-500 flex   justify-center items-center rounded-full absolute top-[-10px] right-[-15px]">
                  {basket.length}
                </span>
              </li>
              <li className=" relative">
                <NavLink to={"/wishlist"}>
                  <FaHeart />
                </NavLink>
                <span className="w-4 h-4 bg-red-500 flex   justify-center items-center rounded-full absolute top-[-10px] right-[-15px]">
                  {wishlist.length}
                </span>
              </li>
              <li className="flex md:hidden">
                <button onClick={hadnleClick}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className={`sidebar ${IsClick ? "active " : ""}`}>
        <div className="wrapper">
          <ul className="flex flex-col min-h-[100vh] gap-4  duration-300 justify-center text-white ">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addpage"}>Addpage</NavLink>
            </li>
            <li>
              <NavLink to={"/admin"}>Admin</NavLink>
            </li>
            <li className=" relative">
              <NavLink to={"/basket"}>
                <SlBasket />
              </NavLink>
            </li>
            <li className=" relative">
              <NavLink to={"/wishlist"}>
                <FaHeart />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
