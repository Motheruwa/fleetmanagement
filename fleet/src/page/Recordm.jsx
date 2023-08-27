import React from 'react'
import { supabase } from '../store/Supabase'
import styles from './Maintenance.module.css'
import Recard from '../component/Recard'

const Recordm = () => {
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
    <div>
          <div className={styles.box}>
    {(rfile.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
    rfile.map((f) => (
      <Recard {...f} />
    ))}
  </div>
    </div>
  )
}

export default Recordm
