"use client"
import React, { useState } from 'react';
import { Bars3Icon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
const Header = () => {
    // let Links = [
    //     { name: "HOME", link: "/" },
    //     { name: "PRODUCT", link: "/product" },
    //     { name: "ABOUT", link: "/about" },
    //     { name: "CONTACT", link: "/contact" },
    // ];
    let [open, setOpen] = useState(false);

    return (
        <div className=' w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    {/* <Bars3Icon className='w-7 h-7 text-blue-600' /> */}
                    <span className=' text-blue-400 uppercase'>Scrollink</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon className=' text-cyan-400' /> : <Bars3BottomRightIcon className=' text-cyan-400' />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static dark:bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {/* {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-400 hover:text-blue-400 duration-500'>{link.name}</a>
              </li>))
          } */}
                    {/* <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={'/Product'} className='text-gray-400 hover:text-blue-400 duration-500'>Product</a>
                    </li> */}

                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300   focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seach Something Here..." required />
                            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>


                    <button className='btn bg-white-600 hover:text-blue-400  text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'><Link href={'/Login'}  >LOGIN</Link></button>
                </ul>
                {/* button */}
            </div>
        </div>

    );
};

export default Header;