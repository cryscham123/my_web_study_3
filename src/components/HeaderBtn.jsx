import React from 'react'
import { useDarkMode } from '../context/DarkmodeContext'

export default function HeaderBtn() {
      const { darkmode,toggleDarkmode } = useDarkMode();
      
      return (
            <button onClick={toggleDarkmode}>
                  <p>
                        {darkmode ? "dark" : "light"}
                  </p>
            </button>
      )
}
