import React, { useEffect } from 'react';
import img69 from "../../src/assets/i1.jpg";
import img70 from "../../src/assets/i2.jpg";
import img71 from "../../src/assets/i3.jpg";
import img72 from "../../src/assets/i4.jpg";
import img73 from "../../src/assets/i5.jpg";
import img74 from "../../src/assets/i6.jpg";
import img75 from "../../src/assets/bg1.jpg";
import img76 from "../../src/assets/bg2.jpg";
import img77 from "../../src/assets/bg3.jpg";
import img78 from "../../src/assets/w1.jpg";
import img79 from "../../src/assets/bg5.jpg";
import img80 from "../../src/assets/love.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    name: "Prisma P.1589 Refined Blue Watch",
    price: "€159.00",
    defaultImg: img69,
    hoverImg: img75,
    cta: "READ MORE"
  },
  {
    name: "Prisma P.1579 Refined Black Watch",
    price: "€149.00",
    defaultImg: img70,
    hoverImg: img76,
    cta: "ADD TO CART"
  },
  {
    name: "Prisma P.1486 Refined Tailor Blue Watch",
    price: "€95.00",
    defaultImg: img71,
    hoverImg: img77,
    cta: "ADD TO CART"
  },
  {
    name: "Prisma P.1881 Navigator Green Watch",
    price: "€249.00",
    defaultImg: img72,
    hoverImg: img78,
    cta: "ADD TO CART"
  },
  {
    name: "Prisma P.1581 Refined Beige Watch",
    price: "€149.00",
    defaultImg: img73,
    hoverImg: img79,
    cta: "ADD TO CART"
  },
  {
    name: "Prisma P.1485 Tailor Black Watch ",
    price: "€95.00",
    defaultImg: img74,
    hoverImg: img74,
    cta: "ADD TO CART"

  },
];

function Stn7() {
useEffect(() => {
      AOS.init({
        duration: 1000,
        delay: 0,
        once: false,
        mirror: true,
      }); // Optional: customize duration
    }, []);


  return (


    <div className="w-full">
      {/* Title */}
      <div className="h-[180px] w-full flex justify-center items-center">
        <h3 className="font-bold text-2xl">Popular for Her</h3>
      </div>

      {/* Grid of Products */}
      <div className="w-full flex justify-center ">
        <div className="w-[80%] grid grid-cols-6  max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative group w-full fade-in zoom-in" data-aos="zoom-in"
              data-aos-duration="1000"
          data-aos-delay={index * 200 + 200}>
              {/* Default Image */}
              <img
                src={product.defaultImg}
                alt="default"
                className="w-full aspect-[180/256] object-cover transition-opacity duration-300 group-hover:opacity-0 z-0 relative"
              />

              {/* Hover Image */}
              <img
                src={product.hoverImg}
                alt="hover"
                className="w-full aspect-[180/256] object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
              />

              {/* Title */}
              <p className="mt-5 text-sm">{product.name}</p>

              {/* Animated Price & CTA */}
              <div className="group overflow-hidden relative h-[25px]">
                <p className="absolute top-0 left-0 text-sm text-gray-500 font-bold transition-all duration-300 transform group-hover:-translate-y-full group-hover:opacity-0">
                  {product.price}
                </p>
                <p className="absolute top-full left-0 text-sky-600 font-bold transition-all duration-300 transform group-hover:translate-y-[-100%] group-hover:opacity-100 text-sm">
                  {product.cta}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="items-end flex absolute top-0 justify-center w-full h-full">
                <div
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}
                  className="flex mb-25 justify-center items-center w-[50px] h-[40px] bg-white shadow-2xl rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
                >
                  <img src={img80} className="h-[20px] w-[20px] " alt="icon" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className='h-[250px] W-full flex justify-center items-center'>
        <button className='bg-gray-100 text-sm w-[240px] rounded-xl h-[55px] text-gray-500 hover:bg-gray-200 transition duration-200'>DISCOVER ALL WOMEN WATCHES</button>
      </div>
    </div>

  );
}

export default Stn7;