import React, { useEffect, useState } from 'react'
import Recard from '../component/Recard'
import styles from './Maintenancema.module.css'
import { supabase } from '../store/Supabase'
const Maintenancema = () => {
  const[rfile,setrfile]=useState([])
  async function getfile() {  
    const { data, error } = await supabase
    .from('message')
    .select()
  .order("created_at",{ascending:false})
  
      if (data) {
        setrfile(data)
      }
      if (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getfile()
    },[])
  return (
    <div className={styles.cont}>
       <div className={styles.box}>
    {(rfile.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
    rfile.map((f) => (
      <Recard {...f} />
    ))}
  </div>
    </div>
  )
}

export default Maintenancema
