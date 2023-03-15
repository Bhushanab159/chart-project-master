import React from 'react'
import "../style/header.css"

const Header = ({HandleForm}) => {
  return (
    <div className='header'>
       <h1>Make your Chart</h1>
       <button onClick={HandleForm} >Add new Chart</button>
    </div>
  )
}

export default Header
