import React from 'react'
import CTO from './CTO/CTO'


function Home({toggleDarkMode,darkMode}) {
  return (
    <div>
        <CTO toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
    </div>
  )
}

export default Home