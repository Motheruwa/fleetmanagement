import React, { useEffect, useRef, useState } from 'react'
import styles from "./Add.module.css"
import { supabase } from '../store/Supabase'
import { Auth } from '../store/Context'
import { useNavigate } from 'react-router-dom'
const Addfuel = () => {
  const navigate=useNavigate()
  const {Maintainsignup}=Auth()
  const[image,setimage]=useState()
  const[error,seterror]=useState()
  const [isLoading, setIsLoading] = useState(false)
  const [vehicle,setvehicle]=useState()
  const [show,setshow]=useState(true)
  const [ifile,setifile]=useState()
  const [zpath,setzpath]= useState()
  const img=useRef()
  const nameref= useRef()
  const emailref= useRef()
  const vehicleidref= useRef()
  const passwordref= useRef()
  function theimage(e){
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setimage(url)
    setifile(file)
  }
  function choose(){
    img.current.click()
  }
  function selectvehicle(e){
     setvehicle(e.target.value)
  }
  async function submit() {
    if (ifile) {
      const filetext = ifile.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);
      setIsLoading(true)
      const { error } = await supabase
        .from("worker")
        .insert({ photo:zpath , name:nameref.current.value , vehiclename:vehicle , vehicleid:vehicleidref.current.value , type:'maintenance manager' , email:emailref.current.value, password:passwordref.current.value});

      if (error) {
        console.log(error);
      }
      await upload()
    setIsLoading(false)
    } else {
      console.log("No file selected!");
    }
    
  }
  useEffect(() => {
    if (ifile) {
      const filetext = ifile.name.split(".").pop();
      const filename = `${Math.random()}.${filetext}`;
      const path = `${filename}`;
      setzpath(filename);
    }
  }, [ifile]);
  async function upload() {
    const { data, error } = await supabase.storage
      .from("fimage")
      .upload(zpath, ifile);

    if (error) {
      console.log(error);
    }
  }
  async function signupfun(){
    try{
      await Maintainsignup(emailref.current.value,passwordref.current.value)
      navigate('/admin')
    }
    catch(err){
      if(err.message==='Firebase: The email address is badly formatted. (auth/invalid-email).'){
    seterror('invalid email')}
    else if(err.message==='Firebase: A non-empty password must be provided (auth/missing-password).'){
      seterror('provide password ')}
    else if(err.message==='Firebase: Password should be at least 6 characters (auth/weak-password).'){
      seterror('password too short')
    }}
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div className={styles.box}>
      <div className={styles.first} style={{display:show?'flex':'none'}}>
        <div className={styles.top}>Add maintenance manager</div>
        <div className={styles.body}>
          <input ref={nameref} placeholder='name'/>
          <img className={styles.chooseimg} onClick={choose} src={image} alt='choose img'/>
          <select onChange={selectvehicle}>
            <option value=''>vehicle</option>
            <option value='sinotruck'>sinotruck</option>
            <option value='corolla'>corolla</option>
            <option value='ford'>ford</option>
            <option value='bus'>bus</option>
          </select>
        </div>
        <button onClick={()=>setshow(false)}>Next</button>
      </div>
      <div className={styles.second} style={{display:show?'none':'flex'}}>
      <div className={styles.top}>Step 2:</div>
      <button onClick={()=>setshow(true)} className={styles.back} style={{color:'rgb(0,140,255'}}>Back</button>
        <div className={styles.body}>
          <input ref={emailref} type='text' placeholder='email'/>
          <input ref={passwordref} type='text' placeholder='password'/>
          <input ref={img} type='file' hidden onChange={theimage}/>
          <input ref={vehicleidref} type='text' maxLength={150} placeholder='vehicleid'/>
        </div>
        <button onClick={() => {
        submit();
        signupfun();
      }}>
        {isLoading ? <div className={styles.loader}></div> : 'Add'}
      </button>
      </div>
    </div>
  )
}

export default Addfuel
