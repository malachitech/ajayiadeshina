import React from 'react'
import Books from '../../Books/Books'

function BooksScreen({darkMode}) {
  return (
    <div style={darkMode? {backgroundColor: 'black', color: 'white'}: 
    {backgroundColor: 'white', color: 'black'}}>
        <Books />
    </div>
  )
}

export default BooksScreen