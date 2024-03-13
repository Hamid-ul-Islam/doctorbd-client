'use client'
import Container from '@/components/Container'
import Home from './home/Home'
import Navbar from './shared/Navbar'
import { useState } from 'react'
import ServerError from '@/components/ServerError'
import Footer from './shared/Footer'

export default function Page() {

  return (
    <Container>
      <Navbar />
      <Home />
      <Footer/>
    </Container>
  )
}
