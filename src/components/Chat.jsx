import React from 'react';
import { chatData } from '../data/dummy';
import { MdOutlineCancel } from 'react-icons/md';
import {Button} from './'
import { useStateContext } from '../contexts/ContextProvider';


const Chatcomponent = ({ image, message, desc, time }) => {

  return (
    <div className='flex justify-center gap-6 items-center  p-2 '>

      <div className='ml-2'>
      <img src={image} alt="Chat Avatar" className='w-12 h-12 rounded-full' />


      </div>


      <div className='flex w-auto flex-col justify-center ml-3'> 
        <h1 className='dark:text-white font-semibold'>
          {message}
        </h1>
        <h3 className='text-gray-400'>
          {desc}
        </h3>
        <h4 className='text-gray-400'>
          {time}
        </h4>
        <div className=' border-b-2 border-gray-400'></div>
      </div>

      
    </div>
  );
}

const Chat = () => {
  const {currentcolor,handleClick}=useStateContext();
  return (
    <div className="absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-semibold text-xl text-black dark:text-white'>
          Messages
        </h1>
        <h2 className='text-black dark:text-white'>
          5 new
        </h2>
        <button type='button' className='text-black dark:text-white text-2xl rounded p-1'>
          <MdOutlineCancel />
        </button>
      </div>

      <div>
        {chatData.map((item, index) => <Chatcomponent key={index} {...item} />)}
      </div>
      <div className='flex items-center justify-center '>
      <Button bgcolor={currentcolor} size="50px" text="See All messages" borderRadius={50}/>

      </div>

    
    </div>
  );
}

export default Chat;
