import React, { useEffect, useState } from 'react'
import {Auth} from '../store/Context'
import { supabase } from '../store/Supabase'
import Maintainre from '../component/Maintainre';
import styles from './Maintenance.module.css'
const Maintainance = () => {
  const[rfile,setrfile]=useState([])
  const{currentMaintain}=Auth()
  const[file,setfile]=useState()
  const[dimage,setdimage]=useState()
  const[useremail,setuseremail]=useState(null)
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
    async function downloadimage(file){
      const { data} = await supabase
      .storage
      .from('fimage')
      .download(file)
      
        const url = URL.createObjectURL(data)
          setdimage(url)
      }
      useEffect(() => {
        if (file && file.photo) { // check if file and file.photo are defined
          downloadimage(file.photo)
        }
      }, [file]) // add file as a dependency
  return (
    <div className={styles.cont}>
      { file && (<div className={styles.idcard}>
       <div className={styles.Dbox}>
        <div className={styles.img}><img src={dimage} alt={file.name}/></div>
         <div className={styles.title}>DBU fleet managemet system</div>
      </div>
      <div className={styles.detail}>
             <div>name :  {file.name}</div>
             <div>email : {useremail}</div>
             <div>vehicle model : {file.vehiclename}</div>
             <div>type : {file.type}</div>
        </div>
        </div>)}
        <div className={styles.box}>
    {(rfile.length===0)? <div className={styles.notfound}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
    rfile.map((f) => (
      <Maintainre {...f} />
    ))}
  </div>     
    </div>
  )
}

export default Maintainance
