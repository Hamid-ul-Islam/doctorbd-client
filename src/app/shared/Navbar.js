import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' text-white flex justify-between items-center px-10 py-5 bg-black border-b border-gray-50'>
        <Link href="/"><h1 className='font-extrabold'>DOCTORBD</h1></Link>


        <div className='flex items-center gap-10 font-bold'>
        <Link href='/contact'>
          <p>Contact Us</p>
        </Link>
       
      </div>
    </nav>
  )
}

export default Navbar
