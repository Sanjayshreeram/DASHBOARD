import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
// import { GoPrimitiveDot } from 'react-icons/go';
import welcome from '../data/welcome-bg.svg'
import { Stacked,Pie,Button,SparkLine } from '../components';
import { earningData,SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-24 '>
      <div className='flex  flex-wrap lg:flex-nowrap justify-center'>
     <div className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-30% to-emerald-200 to-90%    '>
   
       <div className='flex  justify-between items-center '>
        <div>
          <p className='font-bold text-gray-600'>
            Earnings

          </p>
          
          <p  className='font-bold  text-blue-600'>
          $23,002

          </p>
       

        <div className='mt-6'>
          <Button color="white" bgcolor="blue" size="md" text="Download" borderRadius="10px"/>

        </div>

       </div>
       </div>
       </div>
       <div className='flex  m-3 flex-wrap justify-center gap-1 items-center'>
        {
          earningData.map((item)=>(

            <div key={item.title} className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl '>
              <button type="button" className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-sm' style={{color:item.iconColor,backgroundColor:item.iconBg}}  >

          {item.icon}
              </button>
              <p className='mt-3'>
                <span  className='text-lg font-semibold'>
                  {item.amount}

                </span>
                <span className={`text-sm text-${item.pcColor} ml-2s`}>
                  {item.percentage}
                </span>

              </p>
              <p className='text-sm text-gray-400 mt-1 '>
                {item.title}
                </p>
              </div>
          ))
        }
       </div>

     
     </div>


     <div className='flex gap-10 flex-wrap justify-center'>

      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780   '>

        <div className='flex justify-between'>
          <p className='font-semibold text-xl'>
            Revenue Update

          </p>
          <div className='flex items-center gap-4 '>
            <p className='flex items-center gap-2 text-gray-600 '>
              <span className=''>
                {'*'}

               

              </span>
              <span className='font-semibold'>

                Expense

              </span>
            </p>
            <p className='flex items-center gap-2 text-gray-600 '>
              <span className=''>
                {'*'}
               

              </span>
              <span className='font-semibold text-green-500'> 
                Budget
                
              </span>
            </p>


          </div>

        </div>
        <div className='mt-10 flex gap-10 flex-wrap justify-center'>

  <div className='border-r-1 border-color m-4 pr-10'>
    <div>
      <p>
        <span className='text-2xl font-semibold'>
          $93,478

        </span>
        <span className='p-1 bg-red-300 hover:drop-shadow-xl cursor-pointer rounded-full text-white '>
          23%

        </span>
      </p>
      <p className="text-gray-300 font-semibold mt-1">
        Budget
        </p>
    </div>
    <div className='mt-3'>
      <p>
        <span className='text-2xl font-semibold'>
          $43,478

        </span>
        <span className='p-1 bg-green-300 hover:drop-shadow-xl cursor-pointer rounded-full text-white '>
          15%

        </span>
      </p>
      <p className="text-gray-300 font-semibold mt-1">
        Expense
        </p>
    </div>
    <div className='mt-5'>
      <SparkLine currentcolor="blue" id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue" />

    </div>
    <div className='mt-10'>
      <Button color="white" bgcolor="blue" text="Download Report" borderRadius="10px">

      </Button>

    </div>


  </div>
  <div>
    <Stacked width="300px" height="360px" />

  </div>
        </div>
        
        </div> 

        


     </div>

      </div>


    
  )
}

export default Ecommerce