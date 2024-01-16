'use client'
import React, { useState } from 'react'
import Nav from '../components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
import { LuArrowBigDown } from 'react-icons/lu'
import usdt from 'public/usdt.png'
import icon from 'public/small.png'

const PresalePage = () => {
  const price = 0.022

  return (
    <main className="w-full bg-primary_13">
      <Nav />

      <div className="flex flex-col gap-6  items-center mt-12 md:mt-0 font-archivo shadow-xl  ">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[20%] md:w-[15%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-6  w-[90%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]">
          <form action="" className="flex flex-col   gap-4 ">
            <div>
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="token" className="text-sm ">
                  <select className="p-2    rounded-lg bg-transparent focus:border-none active:border-none w-max ">
                    <option value="USDT" className="text-black">
                      USDT
                    </option>
                    <option value="BTC" className="text-black">
                      BTC
                    </option>
                  </select>
                </label>
                <input
                  type="number"
                  className="border  rounded-2xl border-[#2B2B2B] bg-transparent focus-within:outline-none p-3  placeholder:px-2"
                  id="token"
                  placeholder="0.0"
                />
                <LuArrowBigDown size={40} className="w-max mx-auto text-[#5D5D5D]" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="dcen">DCEN</label>
                <input
                  type="number"
                  className="border  rounded-2xl border-[#2B2B2B] bg-transparent focus-within:outline-none p-3 placeholder:px-2"
                  id="dcen"
                  placeholder="0.0"
                />
                <p className="text-[#C1C1C1]">Price: ${price}</p>
              </div>
            </div>
            <button
              type="submit"
              className="text-base font-medium text-primary_3 opacity-40 bg-primary_11 p-2 rounded-full">
              Proceed
            </button>
          </form>
          <div className="flex flex-col gap-4 text-sm mt-4">
            <div className="flex  justify-between gap-4 items-center">
              <p className=" text-primary_7">Minimum Allocation</p>
              <span className="font-medium text-primary_5">$50</span>
            </div>
            <div className="flex  justify-between gap-4 items-center">
              <p className=" text-primary_7">Maximum Allocation</p>
              <span className="font-medium text-primary_5">$25,000</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PresalePage
