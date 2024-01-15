'use client'
import React, { useState } from 'react'
import Nav from '../components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'

const PresalePage = () => {
  return (
    <main className="presale-bg">
      <Nav />

      <div className="flex flex-col gap-6 justify-center items-center h-[100vh]">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[30%] md:w-[20%]" />

        <div className="max-w-sm  rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-6 ">
          <select
            name="token"
            id="token"
            className="block w-full p-2 mb-6 text-sm   rounded-lg bg-transparent    focus:border-none ">
            <option value="USDT" className='text-black'>USDT</option>
            <option value="BTC" className='text-black'>BTC</option>
          </select>
        </div>
      </div>
    </main>
  )
}

export default PresalePage
