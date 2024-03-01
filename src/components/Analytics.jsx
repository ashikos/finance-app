import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white h-screen py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center">
            <img className='w-[500px] mx-auto md:my-10 sm:py-2' src={Laptop} alt="/" />
            <div className="flex flex-col justify-center">
                <p className='text-[#00df9a]  font-extrabold md:text-4xl text-2xl'>Data Analytics Dashborad</p>
                <h1 className='font-bold md:text-4xl text-3xl py-2' >Manage data analytics center</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis assumenda, tempore accusantium odio illum sint modi fuga, eum nemo totam voluptatem suscipit inventore? Hic autem esse officia. At, animi!</p>
                <button className='mx-auto bg-black text-[#00df9a] md:mx-0 cursor-pointer mt-9 w-[150px] rounded-md py-3  '> 
                    Get started
                </button>

            </div>

        </div>
    </div>
  )
}

export default Analytics