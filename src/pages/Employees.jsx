import React from 'react'

import { GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,Search,Edit,Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { ordersData,contextMenuItems,ordersGrid, } from '../data/dummy';
import { Header } from '../components';
import { employeesData,employeesGrid } from '../data/dummy';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white  text-black rounded-3xl' >
    <Header category="Page" title="Employees"/>
    <GridComponent id="gridcomp" dataSource={ employeesData} allowPaging allowSorting allowPdfExport={true} toolbar={["Search"]} width="auto">

      <ColumnsDirective>
      {
        employeesGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>



        ))
      }
      
      
      </ColumnsDirective>
      <Inject services={[Page,Search,Toolbar]}/>
    </GridComponent>


  </div>
  )
}

export default Employees