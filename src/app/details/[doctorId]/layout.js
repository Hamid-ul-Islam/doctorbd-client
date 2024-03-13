import Navbar from '@/app/shared/Navbar'
import React from 'react'
import Details from './page'
import Footer from '@/app/shared/Footer'

export default function layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
