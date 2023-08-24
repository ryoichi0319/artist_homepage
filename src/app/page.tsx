"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/slider'
import Hero from '../components/hero'
import About from '@/components/about/about'
import News from './news/page'
const items = [
  { id: 1, content: 'Slide 1', imageUrl: 'bag2.jpg'  },
  { id: 2, content: 'Slide 2', imageUrl: 'bag1.jpg' },
  { id: 3, content: 'Slide 3', imageUrl: 'bag3.jpg' },
]

export default function Home() {
  return (
    <div>
      <Hero title="Acht8"/>
      <Slider  items={items}/>
      <About />
      <News />
    </div>
  )
}