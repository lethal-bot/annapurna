import React from 'react'
import AnnapurnaIcon from '../../assets/Annapurna.svg'
function Navbar() {
  return (
    <div className='h-full w-full flex items-center justify-center lg:py-5 sm:py-10 py-14' >
        <img src={AnnapurnaIcon} alt="logo" className='h-10'/>
    </div>
  )
}

export default Navbar