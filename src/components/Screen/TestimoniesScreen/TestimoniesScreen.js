import React from 'react'
import Testimonies from '../../Testimonies/Testimonies'

function TestimoniesScreen({darkMode}) {
  return (
    <div style={darkMode? {backgroundColor: 'black'}: 
    {backgroundColor: 'white'}}>
        <Testimonies darkMode={darkMode}/>
    </div>
  )
}

export default TestimoniesScreen