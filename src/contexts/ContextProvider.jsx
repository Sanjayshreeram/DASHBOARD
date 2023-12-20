import React from 'react';
import { useContext,createContext,useState } from 'react';


const StateContext = createContext();


const initialState = { chat:false,
                        cart:false,
                        userProfile:false,
                        notification:false
                    
}

export const ContextProvider = ({children}) => {
 const [activemenu,setActiveMenu] = useState(true);
 const [isclicked,setisclicked]=useState(initialState);
 const [screensize,setscreensize]=useState(undefined);

 const handleClick=(name)=>{
   return  setisclicked(({...initialState,[name]:true}))  

 }
 
    
  
  return (
    <StateContext.Provider value={{activemenu,setActiveMenu,isclicked,setisclicked,handleClick,screensize,setscreensize}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
