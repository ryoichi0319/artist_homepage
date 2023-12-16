'use client'
import Hero from '../components/hero'
import News from './news/page'
import About from '@/components/about/about'
import Slider from '@/components/slider'
import Access from './access/page'

const items = [
  { id: 1, content: 'Slide 1', imageUrl: '/bag2.jpg' },
  { id: 2, content: 'Slide 2', imageUrl: '/bag1.jpg' },
  { id: 3, content: 'Slide 3', imageUrl: '/bag3.jpg' },
]

export default function Home() {
  return (
    <div>
      <Hero title="Product" />
      <Slider items={items} />
      <About />
      <News />
      <Access />
    </div>
  )
}
