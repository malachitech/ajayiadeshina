import React from 'react'
import Home from '../../Home/Home'

function HomeScreen({darkMode, toggleDarkMode}) {
  return (
    <div>
        <Home toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </div>
  )
}

export default HomeScreen