import React from 'react'
import styles from './Welcome.module.css'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className={styles.cont}>
      <p>Welcome To Debrebirhan niversity  <br/> Fleet Management System....  </p> 
      <div className={styles.link}>
        <Link to='/home'>get started</Link>
      </div>
    </div>
  )
}

export default Welcome
