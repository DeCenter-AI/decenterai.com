'use client'
import React, { useState } from 'react'
import Nav from '../components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
import { FaBtc } from 'react-icons/fa'
const PresalePage = () => {
  return (
    <main className="presale-bg">
      <Nav />

      <div className="flex flex-col gap-6 justify-center items-center h-[100vh]">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[30%] md:w-[20%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-6 ">
          <div className="flex flex-col gap-2">
            <select
              name="token"
              id="token"
              className="p-2  text-sm   rounded-lg bg-transparent focus:border-none active:border-none w-max ">
              <option value="USDT" className="text-black">
                USDT
              </option>
              <option value="BTC" className="text-black">
                <FaBtc size={25} className="text-yellow-400" />
                BTC
              </option>
            </select>
            <input
              type="text"
              className="border  rounded-xl border-gray-400 bg-transparent focus-within:border-none p-2"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PresalePage
