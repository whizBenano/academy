import Link from 'next/link'
import styles from '../styles/Start.module.css'
import Meta from '../components/Meta'
import Image from 'next/image'

import backdrop from '../mages/bdrop.jpg'
import tw from '../mages/tw.png'
import fb from '../mages/fb.png'
import ig from '../mages/ig.png'
import share from '../mages/share.png'
import info from '../mages/info.png'

const Home = () => {
  return (
    <div className={styles.land}>
      <Meta />

      <div className={styles.content}>
        <div className={styles.land_first}>
          <h3>Welcome to</h3>
          <h1>SPENCER'S ACADEMY</h1>
          <p>login to</p>
          <Link href='courses'>GET STARTED</Link>
        </div>

        <div className={styles.land_second}>
          <Image src={backdrop} alt='' />
        </div>

        <h2>...learning is fun</h2>
      </div>
        
      <div className={styles.foot}>
          <a href='/'><Image src={tw} alt='' title='follow us on Twitter' /></a>
          <a href='/'><Image src={fb} alt='' title='check our Facebook page' /></a>
          <a href='/'><Image src={ig} title='follow us on Instagram' alt='' /></a>
          <a href='/'><Image src={share} alt='' title='share this page' /></a>
          <a href='/'><Image src={info} alt='' title='Info' /></a>
      </div>

    </div>
  )
}

export default Home