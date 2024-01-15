import React from 'react'
import Nav from '@/app/components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
const page = () => {
  return (
    <main className="presale-bg">
      <Nav />

      <div className="flex flex-col gap-6 justify-center items-center h-[100vh]">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[30%] md:w-[20%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-6 ">
        
        </div>
      </div>
    </main>
  )
}

export default page