"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/slider'
import Hero from '../components/hero'

const items = [
  { id: 1, content: 'Slide 1', imageUrl: 'img1.jpg'},
  { id: 2, content: 'Slide 2', imageUrl: 'img1.jpg' },
  { id: 3, content: 'Slide 3', imageUrl: 'img1.jpg' },
]

export default function Home() {
  return (
    <div>
      <Hero title="Act8"/>
      <Slider  items={items}/>
    </div>
  )
}