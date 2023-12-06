'use client'
import React, { useState } from 'react'
import Header from './Header/page'
import "remixicon/fonts/remixicon.css";
// import user from './img/user-icon.png'
import Post from './Post/page';
import Link from 'next/link';
import { getData } from './config/firebase';
import { postAds } from './config/firebase'



const Home = () => {
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(false)

  const getAds = async () => {
    const adsData = await getData()
    setAds(adsData)
  }
  getAds()

  const [text, setText] = useState('')
  const [file, setImage] = useState('')


  const sentPost = async () => {
    if (text == '') {
      alert("Kindly put some post")
    }
    else {
      setLoading(true)
      await postAds({ text, file: file[0] })
      setText('')
      setImage('')
      setLoading(false)
    }
  }
  if (loading) {
    return <div className='loader' >Loading</div>
}

  return (
    <>
      <div className=' flex'>
        <Header />
        <br />
        <br />
        <br />
        <div className='  mt-28   leading-10 bg-white rounded-sm  overflow-y-scroll h-120 w-1/4'>
          <ul className=' ml-5  text-black cursor-pointer '>
            <li className='hover:text-pink-400' >
              <i class="ri-home-8-line mr-4"></i>
              Feed
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-exchange-box-line mr-4"></i>
              Explore
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-shopping-bag-2-line mr-4"></i>
              MarketPlace
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-group-line mr-4"></i>
              Group
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-heart-fill mr-4"></i>
              My Favorites
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-send-plane-fill mr-4"></i>
              Message
            </li>
            <li className='hover:text-pink-400'>
              <i class="ri-settings-2-line mr-4"></i>
              Setting
            </li>
          </ul>
          {/* </div> */}

          {/* <div className='  mt-4   leading-10   bg-white rounded-sm h-1/4 w-1/4'> */}
          <ul className=' ml-3  leading-10 text-black cursor-pointer'>
            <li >

              <h1 className=' text-blue-400  text-lg font-black mb-3'>
                My Contact
              </h1>
            </li>
            <li className=' flex gap-2 '>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Muhammad Saad
            </li>
            <li className=' flex gap-2'>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Muhammad Nabeel Khan
            </li>
            <li className=' flex gap-2'>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Sami saad
            </li>
            <li className=' flex gap-2'>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Muhammad Uzair
            </li>
            <li className=' flex gap-2'>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Ali Ahmed
            </li>
            <li className=' flex gap-2'>
              <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
              Muhammad Saad
            </li>

          </ul>

          {/* <<<<<<----->>>>>>>>>> */}

          {/* <<<<<<----->>>>>>>>>> */}


        </div>

        <div className=' mt-32  rounded-lg  bg-white shadow-md p-8 h-40  w-2/5'>
          <div className=' flex'>
            <img className=' w-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative ml-5">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input value={text}
                  onChange={(e) => setText(e.target.value)} type="search" id="default-search" class="rounded-xl  block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300   focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Whats Happening...." required />
              </div>
            </form>
          </div>
          <div className=' flex justify-between' >
            <span className=''>
              <i class="ri-vidicon-fill mr-2"></i>
              <button className='mt-6'>Live Video</button>
            </span>
            <span>
              <i class="ri-image-line mr-2"></i>
              <button className='mt-10'></button>
              <label className='label  mt-10'>
                <input onChange={(e) => setImage(e.target.files)}
                  type="file" />
                <span>Photos</span>
              </label>
            </span>
            <span>
              <i class="ri-emotion-happy-line mr-2"></i>
              <button className='mt-6'>Feeling</button>
            </span>
            <span>
              <button onClick={sentPost} className='mt-6 bg-pink-600 text-white p-2 rounded-lg' >POST</button>
              {/* <button onClick={sentPost} className='mt-6 bg-pink-600 text-white p-2 rounded-lg'> <Link href={'/PostSent'}>POST</Link></button> */}
            </span>
          </div>
        </div>
        <div className=''>
          {
            ads.map((item, index) => {
              return (
                <Post key={index} des={item.des} text={item.text} city={item.city} img={item.image} />

              )
            })
          }
        </div>

      </div>

    </>
  )
}

export default Home