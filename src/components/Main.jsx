import React from 'react'

import img1 from "../../src/assets/prisma-logo-najaar-2016-wit.png";
import img from "../../src/assets/e8df4883-c7a2-48ea-a292-3a6f139ed361.jpg";
import img2 from "../../src/assets/en.png";
import img3 from "../../src/assets/icons8-down-arrow-50 (1).png";
import img4 from "../../src/assets/icons8-cart-32.png";
import img5 from "../../src/assets/icons8-search-50.png";
import img6 from "../../src/assets/icons8-netherlands-50.png";
import img7 from "../../src/assets/icons8-shopping-cart-24.png";
import img8 from "../../src/assets/icons8-search-30 (1).png";
import img9 from "../../src/assets/amp-logo.png";
import img10 from "../../src/assets/icons8-down-arrow-50 (2).png";
import img11 from "../../src/assets/icons8-menu-32.png";



import { useEffect, useState } from "react";

function Main() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [clickme, setclickme] = useState(false)
  const [clicking, setclicking] = useState(false)
  const [women, setwomen] = useState(false)
  const [about, setabout] = useState(false)
  const [flag, setflag] = useState(false)



  const image = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const click = () => {
    setclickme(!clickme)
  }
  const click1 = () => {
    setclicking(!clicking)
  }
  const click2 = () => {
    setwomen(!women)
  }
  const click3 = () => {
    setabout(!about)
  }
  const click4 = () => {
    setflag(!flag)
  }



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call once to set initial values
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
<div
  style={{
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  className="w-full h-[100vh] bg-center overflow-scroll"
>
        {(!isScrolled || !isSmallScreen) && (
          <div className="w-[100%] h-[75px]  text-sm lg:flex hidden  items-center">
            <img className="h-[25px] w-[100px]  lg:flex hidden m-5" src={img1} alt="" />
            <ul className="text-white  font-bold  lg:flex hidden m-4 gap-9 items-center ">
              {" "}
              <li className="flex gap-2 relative cursor-pointer group">
                {" "}
                SHOP <img className="h-[12px] mt-2 " src={img3} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black ">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>minimalist</li>
                      <li> stylish</li>
                      <li>sportive</li>{" "}
                      <li>vintage</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>{" "}
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>titanium</li>
                      <li>waterproof</li>
                      <li>stretch band</li>{" "}
                      <li>leather strap</li>
                      <li>steel strap</li>{" "}
                      <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>multifunction</li>
                      <li>with date</li>
                      <li>quartz</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex gap-2 cursor-pointer group">
                {" "}
                MEN <img className="h-[12px] mt-2 " src={img3} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>minimalist</li>
                      <li> stylish</li>
                      <li>sportive</li>{" "}
                      <h2 className="font-bold mt-8">INSPIRATION</h2>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>{" "}
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>{" "}
                      <li>green</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>titanium</li>
                      <li>waterproof</li>
                      <li>leather strap</li>{" "}
                      <li>steel strap</li>
                      <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>work watches</li>
                      <li>chronograph</li>{" "}
                      <li>with date</li>
                      <li>quartz</li>{" "}
                      <li>Automatic/mechanical</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex gap-2 cursor-pointer group">
                {" "}
                WOMEN <img className="h-[12px] mt-2 " src={img3} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>Square</li>
                      <li>small watches</li>
                      <li>minimalist</li>{" "}
                      <li>stylish</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>{" "}
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>titanium</li>
                      <li>waterproof</li>{" "}
                      <li>mother of pearl</li>
                      <li>with diamonds</li>{" "}
                      <li>Leather strap</li>
                      <li>steel band</li>{" "}
                      <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>with date</li>
                      <li>swiss movement</li>
                      <li>quartz</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li>KIDS</li>
              <li>COLLECTIONS</li>{" "}
              <li className="flex gap-2 cursor-pointer group">
                {" "}
                ABOUT <img className="h-[12px] mt-2 " src={img3} alt="" />{" "}
                <div className="bg-white h-[200px] w-[300px] hidden group-hover:flex absolute pl-6 items-center gap-6 mt-8">
                  {" "}
                  <ul className="text-black font-semibold text-sm space-y-3">
                    {" "}
                    <li>The brand history</li>
                    <li>Meet the Dutchmen</li>{" "}
                    <li>prisma stores</li>
                    <li>Contact Us</li>{" "}
                  </ul>{" "}
                </div>{" "}
              </li>{" "}
              <div className="group">
                {" "}
                <div className="flex items-center gap-2 w-[20px]">
                  {" "}
                  <img
                    className="h-[10px] flex items-center  mt-1 cursor-pointer"
                    src={img2}
                    alt=""
                  />{" "}
                  <img className="h-[15px] mt-1 w-[20px]" src={img3} alt="" />{" "}
                </div>{" "}
                <div className="bg-white h-[100px] w-[300px] hidden group-hover:flex absolute pl-5 items-center">
                  {" "}
                  <img className="h-[20px] w-[20px]" src={img6} alt="" />{" "}
                </div>{" "}
              </div>{" "}
            </ul>
            <div className=" gap-3  lg:flex hidden justify-end w-[100%] mr-6">
              {" "}
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={img4}
                alt=""
              />{" "}
              <img
                className="h-[20px] w-[20px] cursor-pointer"
                src={img5}
                alt=""
              />{" "}

            </div>

          </div>
        )}

        {(isScrolled || isSmallScreen) && (
          <div className="w-[100%] h-[75px] text-sm items-center flex bg-white fixed top-0 z-50">
            <img className="h-[25px] w-[100px] m-5 " src={img9} alt="" />{" "}
            <ul className="text-amber-50 flex font-bold m-4 gap-9 items-center ">
              {" "}
              <li className=" gap-2 relative cursor-pointer group text-black lg:flex hidden">
                {" "}
                SHOP <img className="h-[13px] mt-1 w-[13px] " src={img10} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black ">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>minimalist</li> <li> stylish</li> <li>sportive</li>{" "}
                      <li>vintage</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>silver</li> <li>gold</li> <li>bicolor</li>{" "}
                      <li>rosegold</li> <li>black</li> <li>blue</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>titanium</li> <li>waterproof</li> <li>stretch band</li>{" "}
                      <li>leather strap</li> <li>steel strap</li>{" "}
                      <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm mt-2">
                      {" "}
                      <li>multifunction</li> <li>with date</li> <li>quartz</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className=" gap-2 cursor-pointer group text-black lg:flex hidden">
                {" "}
                MEN <img className="h-[13px] mt-1 w-[13px] " src={img10} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>minimalist</li> <li> stylish</li> <li>sportive</li>{" "}
                      <h2 className="font-bold mt-8">INSPIRATION</h2>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>silver</li> <li>gold</li> <li>bicolor</li>{" "}
                      <li>rosegold</li> <li>black</li> <li>blue</li>{" "}
                      <li>green</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>titanium</li> <li>waterproof</li> <li>leather strap</li>{" "}
                      <li>steel strap</li> <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>work watches</li> <li>chronograph</li>{" "}
                      <li>with date</li> <li>quartz</li>{" "}
                      <li>Automatic/mechanical</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className=" gap-2 cursor-pointer group text-black lg:flex hidden">
                {" "}
                WOMEN <img className="h-[13px] mt-1 w-[13px] " src={img10} alt="" />{" "}
                <div className="bg-white h-[300px] w-[1000px] hidden group-hover:flex absolute gap-40 justify-center mt-8">
                  {" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">STYLE</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>Square</li> <li>small watches</li> <li>minimalist</li>{" "}
                      <li>stylish</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">COLOUR</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>silver</li> <li>gold</li> <li>bicolor</li>{" "}
                      <li>rosegold</li> <li>black</li> <li>blue</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8">
                    {" "}
                    <h1 className="font-bold text-black">MATERIAL</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>titanium</li> <li>waterproof</li>{" "}
                      <li>mother of pearl</li> <li>with diamonds</li>{" "}
                      <li>Leather strap</li> <li>steel band</li>{" "}
                      <li>sapphire glass</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="flex flex-col mt-8 ">
                    {" "}
                    <h1 className="font-bold text-black ">FUNCTION</h1>{" "}
                    <ul className="text-black font-semibold space-y-3 text-sm">
                      {" "}
                      <li>with date</li> <li>swiss movement</li> <li>quartz</li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="text-black lg:flex hidden">KIDS</li>{" "}
              <li className="text-black lg:flex hidden">COLLECTIONS</li>{" "}
              <li className=" gap-2 cursor-pointer group text-black lg:flex hidden">
                {" "}
                ABOUT <img className="h-[13px] mt-1 w-[13px] " src={img10} alt="" />{" "}
                <div className="bg-white h-[200px] w-[300px] hidden group-hover:flex absolute pl-6 items-center gap-6 mt-8">
                  {" "}
                  <ul className="text-black font-semibold text-sm space-y-3">
                    {" "}
                    <li>The brand history</li> <li>Meet the Dutchmen</li>{" "}
                    <li>prisma stores</li> <li>Contact Us</li>{" "}
                  </ul>{" "}
                </div>{" "}
              </li>{" "}
              <div className="group">
                {" "}
                <div className=" items-center gap-2 w-[50px] lg:flex hidden">
                  {" "}
                  <img
                    className="h-[12px] flex items-center w-[20px] mt-1 cursor-pointer"
                    src={img2}
                    alt=""
                  />{" "}
                  <img className="h-[13px] mt-1 w-[13px]" src={img10} alt="" />{" "}
                </div>{" "}
                <div className="bg-white h-[100px] w-[300px] hidden group-hover:flex absolute pl-5 items-center">
                  {" "}
                  <img className="h-[20px] w-[20px]" src={img6} alt="" />{" "}
                </div>{" "}
              </div>{" "}
            </ul>{" "}
            <div className="flex gap-3 justify-end w-[100%] mr-7 ">
              {" "}
              <img
                className="h-[25px] w-[25px] cursor-pointer"
                src={img7}
                alt=""
              />{" "}
              <img
                className="h-[20px] w-[20px] cursor-pointer"
                src={img8}
                alt=""
              />{" "}
                {( isSmallScreen) && (              
              <img
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-[20px] w-[20px]  cursor-pointer"
                src={img11}
                alt=""
              />
                              )}
            </div>{" "}
          </div>
        )}





        <div className="lg:h-[438px] lg:w-[630px] flex items-center justify-center w-[360px] h-[500px] ">
          <h1 className="text-zinc-500 font-semibold text-5xl md:items-baseline">
            Get Back Your Time
          </h1>
        </div>
        <div />
      </div>

{( isSmallScreen) && (
      <div
        className={`fixed right-0 top-[70px] bg-white h-[calc(150vh-90px)] w-[35%] z-50 shadow-lg transform transition-transform duration-500 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
                
        <div className="text-sm relative px-5 py-3 h-[90vh] overflow-scroll">

          <div className="flex flex-col gap-6 ">
            {/* SHOP */}

            <li className="flex flex-col text-black relative">
              <div className="flex justify-between font-semibold cursor-pointer">
                SHOP
                <img onClick={click} className="h-[12px] mt-2" src={img10} alt="" />
              </div>

              {clickme && (
                <div className="bg-white h-[auto] w-[50%] gap-15 justify-start mt-4 z-50 flex-col  flex ">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-black">STYLE</h1>
                    <ul className="text-black space-y-3 text-sm ">
                      <li>minimalist</li>
                      <li>stylish</li>
                      <li>sportive</li>
                      <li>vintage</li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-black">COLOUR</h1>
                    <ul className="text-black space-y-3 text-sm mt-2">
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>
                    </ul>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="font-bold text-black">MATERIAL</h1>
                    <ul className="text-black  space-y-3 text-sm mt-2">
                      <li>titanium</li>
                      <li>waterproof</li>
                      <li>stretch band</li>
                      <li>leather strap</li>
                      <li>steel strap</li>
                      <li>sapphire glass</li>
                    </ul>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="font-bold text-black">FUNCTION</h1>
                    <ul className="text-black space-y-3 text-sm mt-2">
                      <li>multifunction</li>
                      <li>with date</li>
                      <li>quartz</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>


            {/* MEN */}
            <li className="flex flex-col text-black relative ">
              <div className="flex justify-between font-semibold cursor-pointer">

                MEN
                <img onClick={click1} className="h-[12px] mt-2" src={img10} alt="" />
              </div>
              {clicking && (
                <div className="bg-white h-[auto] w-[50%] gap-15 justify-startr mt-4 z-50 flex flex-col">
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">STYLE</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>minimalist</li>
                      <li>stylish</li>
                      <li>sportive</li>
                      <h2 className="font-bold mt-8">INSPIRATION</h2>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">COLOUR</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>
                      <li>green</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">MATERIAL</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>titanium</li>
                      <li>waterproof</li>
                      <li>leather strap</li>
                      <li>steel strap</li>
                      <li>sapphire glass</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">FUNCTION</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>work watches</li>
                      <li>chronograph</li>
                      <li>with date</li>
                      <li>quartz</li>
                      <li>Automatic/mechanical</li>
                    </ul>
                  </div>

                </div>
              )}
            </li>

            {/* WOMEN */}
            <li className="flex flex-col text-black relative">
              <div className="flex justify-between font-semibold cursor-pointer">

                WOMEN
                <img onClick={click2} className="h-[12px] mt-2" src={img10} alt="" />
              </div>
              {women && (
                <div className="bg-white h-[auto] w-[50%] gap-15 justify-startr mt-4 z-50 flex flex-col">
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">STYLE</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>Square</li>
                      <li>small watches</li>
                      <li>minimalist</li>
                      <li>stylish</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">COLOUR</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>silver</li>
                      <li>gold</li>
                      <li>bicolor</li>
                      <li>rosegold</li>
                      <li>black</li>
                      <li>blue</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">MATERIAL</h1>
                    <ul className="text-black space-y-3 text-sm">
                      <li>titanium</li>
                      <li>waterproof</li>
                      <li>mother of pearl</li>
                      <li>with diamonds</li>
                      <li>Leather strap</li>
                      <li>steel band</li>
                      <li>sapphire glass</li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-8">
                    <h1 className="font-bold text-black">FUNCTION</h1>
                    <ul className="text-black  space-y-3 text-sm">
                      <li>with date</li>
                      <li>swiss movement</li>
                      <li>quartz</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* KIDS & COLLECTIONS */}
            <li className="text-black list-none font-semibold">KIDS</li>
            <li className="text-black list-none font-semibold">COLLECTIONS</li>

            {/* ABOUT */}
            <li className="flex flex-col text-black relative ">
              <div className="flex justify-between font-semibold cursor-pointer">
                ABOUT
                <img onClick={click3} className="h-[12px] mt-2" src={img10} alt="" />

              </div>
              {about && (
                <div className="bg-white h-[auto] w-[50%] gap-15 justify-startr mt-4 z-50 flex flex-col">
                  <ul className="text-black text-sm space-y-3">
                    <li>The brand history</li>
                    <li>Meet the Dutchmen</li>
                    <li>prisma stores</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              )}
            </li>

            {/* IMAGE ICON GROUP */}
            <div className="group relative ">
              <div className="flex items-center gap-2 justify-between">
                <img
                  className="h-[12px] flex items-center w-[20px] mt-1 cursor-pointer flex-col"
                  src={img2}
                  alt=""
                />
                <div className="flex justify-between">

                  <img onClick={click4} className="h-[12px] mt-2 " src={img10} alt="" />
                </div>
              </div>
              {flag && (
                <div className="bg-white h-[auto] w-[50%] gap-15 justify-startr mt-4 z-50 flex flex-col">
                  <img className="h-[20px] w-[20px]" src={img6} alt="" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
                )}
    
    
    </>
  )
}

export default Main