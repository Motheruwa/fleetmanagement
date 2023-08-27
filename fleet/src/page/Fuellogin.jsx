import React, { useRef, useState } from 'react'
import styles from './Adminlogin.module.css'
import { Auth } from '../store/Context'
import { useNavigate } from 'react-router-dom'

const Fuellogin = () => {
  const {Maintainlogin} =Auth()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const[error,seterror]=useState()
  const passwordRef=useRef()
  const emailRef=useRef()
  async function loginfun(){
      setIsLoading(true)
      try{
      await Maintainlogin(emailRef.current.value,passwordRef.current.value)
    navigate('/fuel')
    }
    catch(err){
      if(err.message==='Firebase: The email address is badly formatted. (auth/invalid-email).')
      {seterror('invalid email')}
      if(err.message==='Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).')
      {seterror('Account not found')}
      else
      {seterror(err.message)}
    }
    finally {
      setIsLoading(false) // set loading state to false after the login attempt
    }
  }
  return (
    <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.title}>sign in</div>
         <div className={styles.detail}>
        <input ref={emailRef} placeholder='email' type='text'/>
         <input ref={passwordRef} placeholder='password' type='password'/>
         </div>
         <button onClick={loginfun} disabled={isLoading} className={isLoading ? 'loading' : ''}>
  {isLoading ? 'Loading...' : 'sign in'}
</button>
         <div className={styles.text}>
          <div style={{color:'red'}}>{error}</div>
         </div>
      </div>
    </div>
  )
}

export default Fuellogin
