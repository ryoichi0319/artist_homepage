"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/slider'


const items = [
  { id: 1, content: 'Slide 1', imageUrl: 'img1.jpg'},
  { id: 2, content: 'Slide 2', imageUrl: 'img1.jpg' },
  { id: 3, content: 'Slide 3', imageUrl: 'img1.jpg' },
]

export default function Home() {
  return (
    <div className='styles.flexContainer'>
      <h1>bandName</h1>
      <Slider  items={items}/>
    </div>
  )
}
