import React, { useEffect, useState } from 'react'
import Fuelcard from '../component/Fuelcard'
import { supabase } from '../store/Supabase'
import styles from './Fuelma.module.css'
const Fuelma = () => {
  const[rfile,setrfile]=useState([])
  async function getfile() {  
    const { data, error } = await supabase
    .from('petition')
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
      <Fuelcard {...f} />
    ))}
  </div>
    </div>
  )
}

export default Fuelma
