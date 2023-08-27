import React from 'react'
import {MdAdminPanelSettings} from 'react-icons/md'
import {CiDeliveryTruck} from 'react-icons/ci'
import {RiToolsFill} from 'react-icons/ri'
import {LuFuel} from 'react-icons/lu'
import styles from './Home.module.css'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.png'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className={styles.cont}>
    <div className={styles.box}>
     <div className={styles.allbutton}>
       <Link to='/adminlogin'>
        <div className={styles.button}>
        <div className={styles.icon}>
           <MdAdminPanelSettings size={'11rem'} color={'black'} className={styles.icons}/>
           </div>
           <div className={styles.title}>
        Administrator
           </div>
        </div>
        
       </Link>
       <Link to='/driverlogin'>
        <div className={styles.button}>
        <div className={styles.icon}>
           <CiDeliveryTruck size={'10rem'} color={'black'} className={styles.icons}/>
           </div>
           <div className={styles.title}>
        Driver
           </div>
        </div>
        
       </Link>
       <Link to='/maintainlogin'>
        <div className={styles.button}>
        <div className={styles.icon}>
           <RiToolsFill size={'11rem'} color={'black'} className={styles.icons}/>
           </div>
           <div className={styles.title}>
             Maintenance Ma
           </div>
        </div>
        
       </Link>
       <Link to='/fuellogin'>
        <div className={styles.button}>
        <div className={styles.icon}>
           <LuFuel size={'11rem'} color={'black'} className={styles.icons}/>
           </div>
           <div className={styles.title}>
         Fuel Manager
           </div>
        </div>
        
       </Link>
     </div>
     <div className={styles.promotion}>
      <div className={styles.img2}><img src={img2}/></div>
      <div className={styles.img3}><img src={img3}/></div>
      <div className={styles.img4}><img src={img4}/></div>
      <div className={styles.img6}><img src={img6}/></div>
      <div className={styles.img7}><img src={img7}/></div>
      <div className={styles.img8}><img src={img8}/></div>
      <div className={styles.img9}><img src={img9}/></div>
     </div>
    </div>
    </div>
  )
}

export default Home
