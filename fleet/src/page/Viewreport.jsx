import React, { useEffect, useState } from 'react'
import styles from './Viewreport.module.css'
import Viewcard from '../component/Viewcard'
import { supabase } from '../store/Supabase'
const Viewreport = () => {
  const[rfile,setrfile]=useState([])
  async function getfile() {  
    const { data, error } = await supabase
    .from('viewreport')
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
      <Viewcard {...f} />
    ))}
  </div>
    </div>
  )
}

export default Viewreport
