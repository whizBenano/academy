import logo from '../src/mages/logo.png'
import styles from '../src/styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => (
  <nav className={styles.first}>
    <div className={styles.control}>
      <Link href='/'><Image src={logo} width={50} /></Link>
      <Link href='login' className={styles.lnk}>LOGIN</Link>
    </div>
  </nav>
)


export default Nav