import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Themesettings = () => {
  const {setcolor,setmode,currentmode,currentcolor,setthemesettings}=useStateContext()
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>

   <div className='float-right h-screen dark:text-gray-200 w-400 bg-white dark:[#484B52]'>
    <div className='flex justify-between items-center p-4 ml-4 '>
         <p className='font-semibold text-xl'>
          settings
          
          </p>    
          <button type='button' onClick={()=>setthemesettings(false)} style={{color:'blueviolet',borderRadius:'50%'}} className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
       <MdOutlineCancel/>
          </button>

    </div>
    <div className='flex-col border-t-1 border-color p-4 ml-4 '>
     <p className='font-semibold text-lg '>

      Theme options
     </p>

     <div className='mt-4'>
      <input type="radio" id="light" name="theme" value="light" className='cursor-pointer' onChange={setmode} checked={currentmode==='light'} >
      
      </input>
      <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
        Light

      </label>

     </div>
     <div className='mt-4'>
      <input type="radio" id="Dark" name="theme" value="Dark" className='cursor-pointer' onChange={setmode} checked={currentmode==='Dark'}>
      
      </input>
      <label htmlFor='Dark' className='ml-2 text-md cursor-pointer'>
        Dark

      </label>

     </div>
    </div>

    <div className='flex-col border-t-1 border-color p-4 ml-4 '>
     <p className='font-semibold text-lg '>

      Color options
     </p>
     <div className='flex gap-3'>
      {
        themeColors.map((item,index)=>(
<TooltipComponent key={index} content={item.name} position='TopCenter'>
<div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
<button type='button'className='h-10 w-10 rounded-full cursor-pointer' style={{backgroundColor:item.color}} onClick={()=>setcolor(item.color)}>
  <BsCheck className={` ml-2 text-2xl text-white ${item.color===currentcolor ? 'block' :'hidden'}  `}/>
</button>
</div>
</TooltipComponent>

        ))
      }

      </div>
     </div>


  
   </div>
    </div>
  )
}

export default Themesettings