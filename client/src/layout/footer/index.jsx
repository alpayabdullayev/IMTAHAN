import React from "react";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-20 bg-gray-800">
        <div className="wrapper">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   xl:grid-cols-4 gap-10 ">
              <div className="flex flex-col gap-4">
                <h1 className="[font-size:_clamp(2em,2vw,10em)] font-bold text-white">
                  Tasty
                </h1>
                <p className="w-8/12 text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, suscipit.
                </p>
                <div className="text-white">
                  <div className="text-xl flex gap-4  items-center">
                    <span>
                      <FaFacebook />
                    </span>
                    <span>
                      <FaTwitch />
                    </span>
                    <span>
                      <FaInstagram />
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-white flex flex-col gap-6">
                <h1 className="[font-size:_clamp(1em,1vw,5em)] font-bold">
                  Opening Hours
                </h1>
                <ul className="flex flex-col gap-2">
                  <li>Monday: 08: - 22:00</li>
                  <li>Tuesday: 08: - 22:00</li>
                  <li>Wednasday: 08: - 22:00</li>
                  <li>Thursay: 08: - 22:00</li>
                  <li>Friday: 08: - 22:00</li>
                  <li>Monday: 08: - 22:00</li>
                </ul>
              </div>
              <div className="text-white flex flex-col gap-6">
                <h1 className="[font-size:_clamp(1em,1vw,5em)] font-bold">
                  Contact Information
                </h1>
                <ul className="flex flex-col gap-2">
                  <li>198 West 21th Street, Suite 721</li>
                  <li>+ 1235 2355 98</li>
                  <li>info@yoursite.com</li>
                  <li>email@email.com</li>
                </ul>
              </div>
              <div className="text-white flex flex-col gap-6">
                <h1 className="[font-size:_clamp(1em,1vw,5em)] font-bold">
                  Newsletter
                </h1>
                <ul className="flex flex-col gap-2">
                  <li className="w-8/12">
                    Far far away, behind the word mountains, far from the
                    countries.
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="SUBSCRIBE"
                      className="py-2 px-4 bg-gray-600"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 pb-10 pt-5">
        <div className="wrapper">
          <div className="flex justify-center items-center">
            <p className="text-white">Copyright ©2024 All rights reserved | This template is made with by
            Colorlib</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
