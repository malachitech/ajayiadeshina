import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutScreen from './components/Screen/AboutScreen/AboutScreen'
import BooksScreen from './components/Screen/BooksScreen/BooksScreen'
import HomeScreen from './components/Screen/HomeScreen/HomeScreen'
import MediaAndAchievementsScreen from './components/Screen/MediaAndAchievementsScreen/MediaAndAchievementsScreen'
import WorksScreen from './components/Screen/WorksScreen/WorksScreen'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/books' element={<BooksScreen  />} />
            <Route path='/media' element={<MediaAndAchievementsScreen />} />
            <Route path='/work' element={<WorksScreen />} />
        </Routes>
    </div>
  )
}

export default Router