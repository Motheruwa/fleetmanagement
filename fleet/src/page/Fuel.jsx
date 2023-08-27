import React, { useEffect, useState } from 'react'
import Fuelca from '../component/Fuelca'
import styles from './Fuel.module.css'
import { Auth } from '../store/Context'
import { supabase } from '../store/Supabase'
const Fuel = () => {
  const{currentMaintain}=Auth()
  const [useremail,setuseremail]=useState()
  const[dimage,setdimage]=useState()
  const[rfile,setrfile]=useState([])
  const[file,setfile]=useState([])
  async function getfile() {  
    const { data, error } = await supabase
    .from('fuelmessage')
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
    useEffect(()=>{
      if (currentMaintain) {
        setuseremail(currentMaintain.email)
      }
      async function Fetch() {  
        const { data, error } = await supabase
          .from('worker')
          .select()
          .eq('email', useremail)
        if (data) {
          setfile(data[0])
        }
        if (error) {
          console.log(error)
        }
      }
      if (useremail) {
        Fetch()
      }
     },[currentMaintain, useremail])
     async function downloadimage(file){
      const { data} = await supabase
      .storage
      .from('fimage')
      .download(file)
      
        const url = URL.createObjectURL(data)
          setdimage(url)
      }
  useEffect(()=>{
      if(file.photo)downloadimage(file.photo)
    })
  return (
    <div className={styles.cont}>
      <div className={styles.idcard}>
      <div className={styles.Dbox}>
        <div className={styles.img}><img src={dimage} alt={file.name}/></div>
         <div className={styles.title}>DBU fleet managemet system</div>
      </div>
      { file && (<div className={styles.detail}>
             <div>name :  {file.name}</div>
             <div>email : {useremail}</div>
             <div>vehicle model : {file.vehiclename}</div>
             <div>type : {file.type}</div>
        </div>)}
        </div>
        <div className={styles.box}>
    {(rfile.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
    rfile.map((f) => (
      <Fuelca {...f} />
    ))}
  </div>
    </div>
  )
}

export default Fuel