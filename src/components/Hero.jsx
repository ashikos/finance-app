import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[80vw] pt-[15%] mx-auto w-full h-screen text-center flex-col justify-center ">
            <p className='text-[#00df9a] p-2 font-extrabold md:text-2xl'>GROWING WITH DATA ANALYTICS..</p>
            <h1 className='md:text-7xl font-extrabold  text-5xl' >Grow with Data</h1>
            <div className="text-base  font-bold md:text-2xl flex justify-center items-center pt-2">
                <p>Fast, Flexible, Financing for</p>
                <ReactTyped className='pl-2'
                    strings={[
                        "BTB",
                        "BTC",
                        "SAAP",
                      ]}
                      typeSpeed={150}
                      backSpeed={150}
                      loop
                    />
                

            </div>
            <p className='font-bold text-gray-500 pt-3 md:text-2xl before:text-base' > Monitor Your Data Analytics to Incratse Your Revenue For BTB, BTC, SAASS Platforms</p>
            <button className='mx-auto  bg-[#00df9a] text-black cursor-pointer mt-9 w-[150px] rounded-md py-3  '> 
                Get started
            </button>
  
        </div>
    </div>
  )
}

export default Hero

// hr@quriousinnovations.com