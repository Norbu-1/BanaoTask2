import React from 'react'
import { BsEmojiGrin } from "react-icons/bs";
const Rightcopy = () => {
  return (
    <div className="md:w-[80%] h-full bg-slate-100 border md:flex justify-center items-center  hidden ">
    <div className='flex flex-col items-center '>
    <BsEmojiGrin  className='w-20 h-20 mb-6 bg-yellow-500 rounded-full'/>
        <h3>Start by one click on profile !</h3>
    </div>
    </div>
  )
}

export default Rightcopy