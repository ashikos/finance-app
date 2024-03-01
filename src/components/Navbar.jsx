import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = ()=>{
        console.log(nav);
        setNav(!nav)
      
    }

  return (
    <div className='text-white flex px-5 items-center mx-auto max-w-[1240px] pt-5' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'> React.</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-5'> Home</li>
            <li className='p-5'> Company</li>
            <li className='p-5'> Resources</li>
            <li className='p-5'> About</li>
            <li className='p-5'> Contact</li>

        </ul>
        <div onClick={handleNav} className='md:hidden'>
            {!nav ? <AiOutlineClose  size={20}/>: <AiOutlineMenu  size={20}  /> }
        </div>
        <div className={!nav ? 'bg-[#202120] fixed left-0 top-0 pt-5 pl-5 h-full w-[80%] ease-in-out duration-200' : 'fixed left-[-100%] top-0 ease-out-in duration-500 '}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> React.</h1>
        <ul className='uppercase '>
            <li className='p-5 border-b border-gray-700'> Home</li>
            <li className='p-5 border-b border-gray-700'> Company</li>
            <li className='p-5 border-b border-gray-700'> Resources</li>
            <li className='p-5 border-b border-gray-700'> About</li>
            <li className='p-5 '> Contact</li>

        </ul>
        </div>
        
        



    </div>
  )
}

export default Navbar