import React from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex justify-between max-w-screen items-center py-3 px-2 m-auto'>
      <NavPart1 />
      <NavPart2 />
    </div>
  )
}

export default Navbar
