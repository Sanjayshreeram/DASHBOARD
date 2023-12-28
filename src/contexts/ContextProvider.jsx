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
 const [currentcolor, setcurrentcolor] = useState('#03C9D7');
 const [currentmode, setcurrentmode] = useState('light');
 const [themesettings, setthemesettings] = useState(false)

 const setmode=(e)=>{
  setcurrentmode(e.target.value);
  console.log(e.target.value)
  localStorage.setItem('themeMode',e.target.value )



 }
 
 const setcolor=(color)=>{
  setcurrentcolor(color);
  localStorage.setItem('colorMode',color);
  setthemesettings(false);



 }

 const handleClick=(name)=>{
   return  setisclicked(({...initialState,[name]:true}));
   setthemesettings(false);

 }
 
    
  
  return (
    <StateContext.Provider value={{activemenu,setActiveMenu,isclicked,setisclicked,handleClick,screensize,setscreensize,setscreensize,currentcolor,currentmode,setcurrentcolor,setcurrentmode,themesettings,setthemesettings,setcolor,setmode}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
