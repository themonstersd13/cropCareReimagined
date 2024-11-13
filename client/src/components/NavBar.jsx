import React from 'react'

function NavBar() {
  return (
    <div className='h-12 w-full bg-green-800 flex gap-7 items-center justify-end'>
        <div className="Home p-2 bg-green-400 rounded-xl text-white cursor-pointer ">Home</div>
        <div className="Login p-2 bg-green-400 rounded-xl text-white cursor-pointer ">Login</div>
        <div className="AboutUs p-2 bg-green-400 rounded-xl text-white cursor-pointer ">About Us</div>
        <div className="profile p-2 bg-green-400 rounded-xl text-white cursor-pointer ">Profile</div>
    </div>
  )
}

export default NavBar