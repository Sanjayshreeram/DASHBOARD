import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';



import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart,Userprofile,Chat,Notification} from './index';
import { useStateContext } from '../contexts/ContextProvider';
import { useFetcher } from 'react-router-dom';

const Navbutton=({cusfunc,title,color,icon,dotColor})=>(

  <TooltipComponent content={title}  position='BottomCenter'>
      <button type="button" onClick={cusfunc} style={{color}} className='relative  text-xl rounded-full p-3 hover:bg-light-gray'>
      {icon}
<span  style={{background:dotColor}}  className='absolute   inline-flex rounded-full h-2 w-2 right-2 top-2 '>


</span> 
</button>


  </TooltipComponent>
  


  



)




const Navbar = () => {

  const {activeMenu,setActiveMenu,isclicked,setisclicked,handleClick,screensize,setscreensize}=useStateContext();

  useEffect(()=>{
    const handleresize=()=>setscreensize(window.innerWidth);
    window.addEventListener('resize',handleresize); //everytime the size chnages invoke the function 

    handleresize();

    return ()=>window.removeEventListener('resize',handleresize); //remove eventlisteners

  },[])


  useEffect(()=>{
    if(screensize<=900)
    {
      setActiveMenu(false) // to make sidebar disappear in case of mobile view
    }
    else
    {
      setActiveMenu(true);
    }


  },[screensize])
  return (
    <div className='flex justify-between  md:mx-6 p-2 relative '>

      <Navbutton title="Menu" cusfunc={()=>setActiveMenu((prev)=>!prev)  } color="blue" icon={<AiOutlineMenu/>}/>

      <div className='flex'>
      <Navbutton title="Cart" cusfunc={()=>handleClick('cart')  } color="blue" icon={<FiShoppingCart/>}/>
      <Navbutton title="Chat" cusfunc={()=>handleClick('chat')  } color="blue" dotColor="red" icon={<BsChatLeft/>}/>
      <Navbutton title="Chat" cusfunc={()=>handleClick('notification')} color="blue" dotColor="red" icon={<RiNotification3Line />}/>

       <TooltipComponent content="profile" position='BottomCenter'>
      <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' >
       <img src={avatar} className='w-8 rounded-full' onClick={()=>handleClick(' userProfile')}/>
         <p>

          <span className='text-gray-400 text-14'>
            Hi
          </span>{' '}
          <span className='text-gray-400 font-bold ml-1 text-14'>
            Sanjay
          </span>
          <MdKeyboardArrowDown/>
         </p>
      </div>

       </TooltipComponent>

       {isclicked.cart && <Cart/>}
        {isclicked.chat && <Chat/>}
          {isclicked.notification && <Notification/>}
          {isclicked.userProfile && <Userprofile/>}
      </div>
</div>


  )
}

export default Navbar