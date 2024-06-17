import React from 'react'

function DarkMode() {
    const setDarkmode=()=>{
        document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLightmode=()=>{
        document.querySelector("body").setAttribute('data-theme','light')
    }
    const toggleTheme=(e)=>{
        if(e.target.checked)setDarkmode();
        else setLightmode()
    }
  return (
    <div className='dark_mode ms-5'>
        <input type="checkbox" onChange={toggleTheme} className='dark_mode_input' id='darkmode-toggle'/>
        <label htmlFor="darkmode-toggle" className='dark_mode_label'>
        <i class="fa-solid fa-sun text-warning"></i>
        <i class="fa-solid fa-moon text-light"></i>
        </label>
    </div>
  )
}

export default DarkMode