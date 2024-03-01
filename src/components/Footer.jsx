import React from 'react'
import {
    FaInstagram, 
    FaFacebookSquare, 
    FaDribbbleSquare, 
    FaGithubSquare, 
    FaTwitterSquare
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full py-10 px-4 bg-black max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8 text-gray-400 '>
        <div className="">
        <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'> React.</h1>
        <p className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo deleniti delectus sunt doloribus laboriosam fugiat nulla error ut at?</p>
        <div className="flex justify-between md:w-[75%] my-4">
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaDribbbleSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaTwitterSquare size={30}/>
        </div>
        </div>
        <div className="md:col-span-2 my-11 flex justify-between">
            <div>
            <h6 className='font-medium text-xl'>Solutions</h6>
            <ul>
                <li className='font-sm text-gray-300 py-1'>Analitics</li>
                <li className='font-sm text-gray-300 py-1'>Marketing</li>
                <li className='font-sm text-gray-300 py-1'>Commerce</li>
                <li className='font-sm text-gray-300 py-1'>Insights</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-xl'>Support</h6>
            <ul>
                <li className='font-sm text-gray-300 py-1'>Pricing</li>
                <li className='font-sm text-gray-300 py-1'>Documentation</li>
                <li className='font-sm text-gray-300 py-1'>Guides</li>
                <li className='font-sm text-gray-300 py-1'>Api settings</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-xl'>Company</h6>
            <ul>
                <li className='font-sm text-gray-300 py-1'>About</li>
                <li className='font-sm text-gray-300 py-1'>Blogs</li>
                <li className='font-sm text-gray-300 py-1'>Careers</li>
                <li className='font-sm text-gray-300 py-1'>Jobs</li>
            </ul>
            </div>

            <div>
            <h6 className='font-medium text-xl'>Legal</h6>
            <ul>
                <li className='font-sm text-gray-300 py-1'>Policy</li>
                <li className='font-sm text-gray-300 py-1'>Claims</li>
                <li className='font-sm text-gray-300 py-1'>Terms</li>
                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer