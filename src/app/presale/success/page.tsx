import React from 'react'
import Nav from '@/app/components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
const page = () => {
  return (
    <main className="presale-bg">
      <Nav />

      <div className="flex flex-col gap-6  items-center mt-12 md:mt-0 font-archivo shadow-xl  ">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[20%] md:w-[15%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-6  w-[90%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]">
          
        </div>
      </div>
    </main>
  )
}

export default page