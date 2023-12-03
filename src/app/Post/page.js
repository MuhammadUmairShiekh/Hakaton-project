import React from 'react'
import { getData } from '../config/firebase'

const Post = (props) => {

    const { text, des ,city, img } = props
    return (
        <div>
            <div className=' mt-32 rounded-lg m-3  bg-white shadow-md p-2  h-2/3  w-96 '>
                <div className='flex'>
                    <img className=' w-10 h-10' src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt='user' />
                    <span>
                        <h2 className=' mt-1 ml-3'>{text} <br /> {city}</h2>
                    </span>
                </div>
                <p className=' w-2/3'> {des} </p> 
                <img className=' p-6  w-96' src={img} />

                <span className=' flex justify-between cursor-pointer'>
                    <p> <i class="ri-heart-fill"></i>  Like 10</p>
                    <p> <i class="ri-chat-4-line"></i> Comment</p>
                    <p> <i class="ri-send-plane-fill"></i> Share</p>
                </span>

            </div>
        </div>
    )
}

export default Post