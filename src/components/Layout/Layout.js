import React from 'react'
import Footer from './Footer/Footer'
// import Navbar from './Navbar/Navbar'

function Layout({children, toggleDarkMode, darkMode}) {
 
  return (
    <div>
        {/* <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/> */}

          <div style={{marginTop: '50px'}}>
              {children}
          </div>

        <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default Layout