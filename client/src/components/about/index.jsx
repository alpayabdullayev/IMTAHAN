import React from "react";

const About = () => {
  return (
    <>
      <section className="py-20">
        <div className="wrapper">
          <div className="grid grid-cols-1   lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4  justify-center">
              <p className="text-gray-600">ABOUT TASTY</p>
              <h1 className=" [font-size:_clamp(2em,2vw,10em)] font-bold">Our chef cooks the most delicious food for you</h1>
              <p className="  text-gray-600">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="  text-gray-600">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
