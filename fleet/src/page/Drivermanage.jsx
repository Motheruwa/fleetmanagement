import Drivercard from '../component/Drivercard'
import { supabase } from '../store/Supabase'
import React, { useEffect, useState } from 'react'
import styles from './Drivermanage.module.css'
const Drivermanage = () => {
    const[rfile,setrfile]=useState([])
    async function getfile() {  
      const { data, error } = await supabase
      .from('worker')
      .select()
      .eq('type','driver')
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
  <Drivercard {...f} />
))}
</div>
</div>
  )
}

export default Drivermanage
