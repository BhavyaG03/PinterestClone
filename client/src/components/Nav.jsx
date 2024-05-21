import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import {Link} from 'react-router-dom'


const Nav = () => {
    const [visible, setVisible] = useState(false)
  return (
    <nav className='w-full h-[80px] bg-white relative' >
        <ul className="flex items-center justify-start gap-2 p-5 mx-2 sm:mx-0 md:mx-4">
            <li className="">
                <Link to={'/'}>
                    <img src="https://static-00.iconduck.com/assets.00/pinterest-icon-1024x1024-mcmp5zdy.png" alt="" className="object-cover w-12 ml-3 rounded-full lg:w-10 md:h-8 h-7 " />
                </Link>
            </li>
           
            <li className="md:text-2xl ml-3 text-[18px] text-black cursor-pointer ">
                <div className="relative flex items-center justify-center gap-3">
                       <Link to={'/'}>
                         <button className='home md:home_big px-4 py-2 rounded-full text-[16px]'>Home</button>
                       </Link>
                       <div className="flex flex-col">
                        <div className="">
                     <FiChevronDown size={24} className='absolute sm:hidden left-14 bottom-2'></FiChevronDown>
                       </div>
                       {/* <div className="absolute left-0 flex flex-col w-32 h-16 bg-white rounded-lg shadow-xl ring-1 top-10"></div> */}
                      </div>
                </div>
            </li>
            <li className="md:block text-[16px] text-black cursor-pointer ml-2 font-medium hidden">Explore</li>
            <Link to={'/create'}>
                 <li className="md:block text-[16px] text-black cursor-pointer font-medium ml-3 hidden">Create</li>
            </Link>
            <li className='flex items-center justify-start w-full ml-2'>
                <div className="relative flex items-center justify-start w-full sm:max-w-xs md:max-w-md lg:max-w-xl xl:max-w-4xl">
                    <input type='text' placeholder='Search' className='bg-[#E1E1E1] search w-full '></input>
                    <BiSearch size={24} className='absolute right-4' ></BiSearch>
                </div>
            </li>
            <li >
                <BsBellFill size={20} className='ml-2 cursor-pointer hover:text-[#E1E1E1]'></BsBellFill>
            </li>
            <li >
                <AiFillMessage size={20} className='ml-2 cursor-pointer hover:text-[#E1E1E1]'></AiFillMessage>
            </li>
            <li className='bg-[#E1E1E1] flex justify-center items-center rounded-full w-16 lg:h-10 ml-2 h-6 cursor-pointer '>
                B
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav