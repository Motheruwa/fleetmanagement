import React, { useEffect, useRef, useState } from 'react'
import {Auth} from '../store/Context'
import Styles from './Driver.module.css'
import { supabase } from '../store/Supabase'
const Driver = () => {
   const{currentDriver}=Auth()
  const [ifile, setifile] = useState();
  const [zpath, setzpath] = useState(null);
  const [type,settype]=useState()
   const [file,setfile]=useState([])
  const[image,setimage]=useState()
  const[dimage,setdimage]=useState()
  const img=useRef()
   const[useremail,setuseremail]=useState(null)
   const contentref=useRef()
   const messageref=useRef()
   const kmref=useRef()
   const liref=useRef()
   function selecttype(e){
    settype(e.target.value)
 }
   function choose(){
    img.current.click()
  }
  function theimage(e){
    const file = e.target.files[0]

    const url = URL.createObjectURL(file)
    setimage(url)
    setifile(file) 
  }
  async function upload() {
    const { data, error } = await supabase.storage
      .from("fimage")
      .upload(zpath, ifile);
    if (error) {
      console.log(error);
    }
  }
  async function submit() {
    if (ifile) {
      const filetext = ifile.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);

      const { error } = await supabase
        .from("message")
        .insert({ photo: zpath , name: file.name , vehiclename:file.vehiclename , content:contentref.current.value , message:messageref.current.value});

      if (error) {
        console.log(error);
      }
    } else {
      console.log("No file selected!");
    }
    upload()
  }
  useEffect(() => {
    if (ifile) {
      const filetext = ifile.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);
    }
  }, [ifile]);
  
   useEffect(()=>{
    if (currentDriver) {
      setuseremail(currentDriver.email)
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
   },[currentDriver, useremail])
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
async function submitfuel() {
    

    const { error } = await supabase
      .from("fuelmessage")
      .insert({ name: file.name , vehiclename:file.vehiclename , km:kmref.current.value , litre:liref.current.value,type:type});

    if (error) {
      console.log(error);
  } else {
    console.log("No file selected!");
  }
}
  return (
    <div className={Styles.cont}>
      <div className={Styles.idcard}>
      <div className={Styles.Dbox}>
        <div className={Styles.img}><img src={dimage} alt={file.name}/></div>
         <div className={Styles.title}>DBU  fleet managemet system</div>
      </div>
      { file && (<div className={Styles.detail}>
             <div>name :  {file.name}</div>
             <div>email : {useremail}</div>
             <div>vehicle model : {file.vehiclename}</div>
             <div>type : {file.type}</div>
        </div>)}
        </div>
        <div className={Styles.current}>
         <div style={{fontWeight:'bold',fontSize:'25px'}}>Current Destination</div>
         <div style={{fontWeight:'bold',fontSize:'25px',color:'#1a6383'}}>{file.destination}</div>
         <div style={{fontWeight:'bold',fontSize:'25px',color:'#1a6383'}}>{file.dkm}Km.</div>
        </div>
        <div className={Styles.maintainance}>
        <div className={Styles.message}>
          <div className={Styles.stitle}>problem submition form</div>
          <div className={Styles.input}>
          <input type='text' placeholder='content' ref={contentref}/>
          <img className={Styles.chooseimg} onClick={choose} src={image} alt='choose img'/>
          <input ref={img} type='file' hidden onChange={theimage}/>
           <input type='text' placeholder='message' ref={messageref}/>
          </div>
          <div className={Styles.button} ><button onClick={submit}>submit</button></div>
           
        </div>
        </div>
        <div className={Styles.fuel}>
        <div className={Styles.message}>

        <div className={Styles.stitle}>asking for fuel </div>
        <div className={Styles.input}>
          <input type='text' placeholder='km' ref={kmref}/>
          <select onChange={selecttype}>
          <option>choose your oil type</option>
            <option value='benezen'>benezen</option>
            <option value='diesel'>diesel</option>
            <option value='gasoline'>gasoline</option>
            </select>
           <input type='text' placeholder='how many you liter want ' ref={liref}/>
          </div>
          <div className={Styles.button} ><button onClick={submitfuel}>submit</button></div>
        </div>
        </div>
    </div>
  )
}
export default Driver
