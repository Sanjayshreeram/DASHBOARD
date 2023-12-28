import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Linechart,ChartsHeader } from '../../components';
import {Header} from '../../components'
const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl' >
      <Header title='Line Chart' category="Chart"  />
      <div className='w-full'>
        <Linechart/>

      </div>
    </div>
  )
}

export default Line