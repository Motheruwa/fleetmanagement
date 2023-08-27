import React, { useEffect, useState } from "react";
import styles from './Recard.module.css'
import { supabase } from '../store/Supabase'
const Recard = (item) => {
    const [image,setimage]=useState()

    async function downloadimage(file){
        const { data} = await supabase
        .storage
        .from('fimage')
        .download(file)
        
          const url = URL.createObjectURL(data)
            setimage(url)
        }
          useEffect(()=>{
            if(item.photo)downloadimage(item.photo)
          })
  return (
    <div className={styles.card}>
      <div className={styles.detail}>
       <div className={styles.name}>
       <div> name : {item.name}</div>
       <div> vehiclename : {item.vehiclename}</div>
       <div> time : {item.created_at}</div>
       </div>
       <div className={styles.content}>
           <div>{item.content}</div>
       </div>
       <div className={styles.disc}>
       <div>{item.message}</div>
       </div>
       <div className={styles.complete}>under_review</div>
      </div>
      <div className={styles.img}><img src={image} alt={item.name}/></div>
    </div>
  )
}

export default Recard
