import React from 'react'

const Button = ({bgcolor,color,size,text,borderRadius}) => {
  return (
   <button type="button"  className={`text-${size} p-3 hover:drop-shadow-xl`} style={{backgroundColor:bgcolor ,borderRadius}}>


     {text}

   </button>
  )
}

export default Button