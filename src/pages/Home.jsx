import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/NavBar'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Categories />
      <Products />
    </div>
  )
}
