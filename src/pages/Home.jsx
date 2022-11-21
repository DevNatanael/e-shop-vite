import React from 'react'
import { Announcement } from '../components/Announcement'
import { Navbar } from '../components/NavBar'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
    </div>
  )
}
