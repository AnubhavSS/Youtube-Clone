import Image from 'next/image'
import styles from './page.module.css'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main>
      <div style={{backgroundColor:'#000'}} >
     <Feed/>
      </div>
    </main>
  )
}
