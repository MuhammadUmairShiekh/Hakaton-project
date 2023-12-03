"use client"
import React, { useState } from 'react'
import { postAds } from '../config/firebase'
const PostSent = () => {
    const [text, setText] = useState('')
    const [city, SetCity] = useState('')
    const [file, setImage] = useState('')
    const [des, setDes] = useState('')


    const sentPost = async () => {
        if (text == '' || des == '' || city == '') {
            alert("Kindly put some post")
        }
        else {
            await postAds({ text, city, des, file: file[0] })
            setText('')
            SetCity('')
            setImage('')
            setDes('')

        }
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Post Your Ads
                    </h2>
                    <div className="flex flex-col">
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            placeholder="Full Name"
                        />

                        <input
                            type="text"
                            value={city}
                            onChange={(e) => SetCity(e.target.value)}
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            placeholder="City Name  "
                        />
                        <textarea value={des} onChange={(e) => setDes(e.target.value)} name="cover_letter" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Cover Letter"></textarea>


                        <input
                            onChange={(e) => setImage(e.target.files)}
                            type="file"
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            placeholder="Resume"
                        />
                        <button
                            onClick={sentPost}

                            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostSent