import React, { useRef } from 'react'
import styles from './Drivercard.module.css'
import { supabase } from '../store/Supabase'
const Drivercard = (item) => {
    const desref=useRef()
    const kmref=useRef()
    async function submit(){
        const { error } = await supabase
.from('worker')
.update({ destination: desref.current.value , dkm: kmref.current.value})
.eq('id', item.id)
    }

  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <div>NAME={item.name}</div>
        <div>VEHICLE_ID={item.vehicleid}</div>
      </div>
      <div className={styles.des}>
        <input type='text' placeholder='enter destination' ref={desref}/>
        <input type='number' placeholder='enter km' ref={kmref}/>
      </div>
      <div className={styles.button}><button onClick={submit}>sumbit</button></div>
    </div>
  )
}

export default Drivercard
