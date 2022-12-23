import React from 'react'
import Media from '../../Media/Media'

function MediaAndAchievementsScreen({darkMode}) {
  return (
    <div style={darkMode? {backgroundColor: 'black', color: 'white'}: 
    {backgroundColor: 'white', color: 'black'}}>
        <Media darkMode={darkMode}/>
    </div>
  )
}

export default MediaAndAchievementsScreen