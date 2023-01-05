import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkmodeContext = createContext();

export default function DarkmodeProvider({children}) {
      const [darkmode,setDarkmode] = useState(false);
      const toggleDarkmode = () => {
            updateDarkmode(!darkmode);
            setDarkmode(!darkmode);
      }
      useEffect(() => {
            const isDark = localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
            updateDarkmode(isDark);
            setDarkmode(isDark);
      },[]);
      return (
      <DarkmodeContext.Provider value={{darkmode,toggleDarkmode}}>
            {children}
      </DarkmodeContext.Provider>
      )
}

function updateDarkmode(darkmode){
      if(darkmode){
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
      } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
      }
}
export const useDarkMode = () => useContext(DarkmodeContext);