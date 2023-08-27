import React from 'react'
import {BiLogoFlutter} from 'react-icons/bi'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.logo}><Link to='/home'>Fleet <BiLogoFlutter size={'3rem'}/></Link></div>
      <div className={styles.detail}>
        <div><Link to='/about'>about</Link></div>
      </div>
    </div>
  )
}

export default Navbar
