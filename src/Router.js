import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutScreen from './components/Screen/AboutScreen/AboutScreen'
import BooksScreen from './components/Screen/BooksScreen/BooksScreen'
import HomeScreen from './components/Screen/HomeScreen/HomeScreen'
import MediaAndAchievementsScreen from './components/Screen/MediaAndAchievementsScreen/MediaAndAchievementsScreen'
import ArticlesScreen from './components/Screen/ArticlesScreen/ArticlesScreen'
import TestimoniesScreen from './components/Screen/TestimoniesScreen/TestimoniesScreen'
import WorksScreen from './components/Screen/WorksScreen/WorksScreen'
import ContactScreen from './components/Screen/ContactScreen/ContactScreen'
// import UberScreen from './components/Screen/UberScreen/UberScreen'

function Router({toggleDarkMode, darkMode}) {
   
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/about' element={<AboutScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/books' element={<BooksScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/media' element={<MediaAndAchievementsScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/articles' element={<ArticlesScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/testimonies' element={<TestimoniesScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/works' element={<WorksScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            <Route path='/contact' element={<ContactScreen toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
            {/* <Route path='/uber' element={<UberScreen />} /> */}
        </Routes>
    </div>
  )
}

export default Router