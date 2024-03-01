import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className='md:text-3xl sm:text:2xl font-bold py-2'>
                    Wants tips & tricks to optimize your flow
                </h1>
                <p>Signup to your newsletter and stay up to date</p>
            </div>
            <div className="my-2">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className='py-3 pl-2 flex w-full rounded-md text-black' type="email"  placeholder='Email' />
                    <button className='ml-1 sm:ml-3 my-6 px-6 py-3 mx-auto  bg-[#00df9a] text-black cursor-pointer w-[200px] rounded-md' type="button">Notify me  </button>
                </div>
                <p>We care about the privacy of your data. Read our <br /><span className='text-[#00df9a]'>Privacy policy </span></p>
            </div>
            
        </div>

    </div>
  )
}

export default Newsletter