import React from 'react'
import styles from './Viewcard.module.css'
const Viewcard = (item) => {
  return (
    <div className={styles.card}>
      <div className={styles.detail}>
       <div className={styles.name}>
       <div> name : {item.name}</div>
       <div> vehiclename : {item.vehiclename}</div>
       <div> time : {item.created_at}</div>
       </div>
       <div className={styles.km}>
         <div>type_{item.type}</div>
         <div  style={{borderTop:'1px solid black'}}>litre_{item.litre}</div>
       </div>
       <div className={styles.content}>
          <div className={styles.co}>content_{item.content}</div>
          <div className={styles.di}>discription_{item.message}</div>
       </div>
      </div>
    </div>
  )
}

export default Viewcard
