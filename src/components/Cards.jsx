import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full  py-[5rem] px-4 bg-white text-black'>
        <div className="max-w-[1240px] gap-14 grid md:grid-cols-3 mx-auto text-2xl">
            <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
                <img className=' w-24 mx-auto ' src={single} alt="/" />
                <h2 className= 'text-3xl font-bold py-4 mt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className="font-medium  py-4" >
                    <p className='py-2' >800 Gb storage</p>
                    <p className='py-2'>1 Granted user</p>
                    <p className='py-2'>Sent upto 2GB</p>
                </div>
                <button className='mx-auto  bg-[#00df9a] text-black cursor-pointer mt-9 w-[200px] rounded-md py-3  '> 
                Start free trial
            </button>
            </div>

            <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
                <img className=' w-24 mx-auto ' src={double} alt="/" />
                <h2 className= 'text-3xl font-bold py-4 mt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className="font-medium  py-4" >
                    <p className='py-2' >800 Gb storage</p>
                    <p className='py-2'>1 Granted user</p>
                    <p className='py-2'>Sent upto 2GB</p>
                </div>
                <button className='mx-auto  bg-black text-[#00df9a] cursor-pointer mt-9 w-[200px] rounded-md py-3  '> 
                Start free trial
            </button>
            </div>

            <div className="w-full flex flex-col gap-3 text-center shadow-xl rounded-lg py-8 my-4 hover:scale-105  duration-500 ">
                <img className=' w-24 mx-auto ' src={triple} alt="/" />
                <h2 className= 'text-3xl font-bold py-4 mt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className="font-medium  py-4" >
                    <p className='py-2' >800 Gb storage</p>
                    <p className='py-2'>1 Granted user</p>
                    <p className='py-2'>Sent upto 2GB</p>
                </div>
                <button className='mx-auto  bg-[#00df9a] text-black cursor-pointer mt-9 w-[200px] rounded-md py-3  '> 
                Start free trial
            </button>
            </div>

            

        </div>
    </div>
  )
}

export default Cards 