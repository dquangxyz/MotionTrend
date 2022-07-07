import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img className='logo-icon' src='/images/logo-icon.png' />
      </div>
      <div className='header-right'>
        <div className='header-text'>Discover</div>
        <div className='header-text'>Job</div>
        <div class='search-form'>
            <input className='search-box' placeholder='Search for motion trend....' />
            <button class='search-button'><BsSearch color="white" style={{height:"1rem", width:"1rem"}} /></button>
        </div>       
        <div className='header-text'>Login</div>
        <div className='header-text'>Sign Up</div>
      </div>
    </div>
  )
}

export default Header