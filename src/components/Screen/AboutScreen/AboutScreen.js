import React from 'react'
import About from '../../About/About'

function AboutScreen({darkMode, toggleDarkMode}) {
  return (
    <div style={darkMode? {backgroundColor: 'black', color: 'white'}: 
    {backgroundColor: 'silver', color: 'black'}}>
        <About toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </div>
  )
}

export default AboutScreen