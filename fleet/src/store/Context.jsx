import React, { useContext,useState,useEffect } from 'react'
import {Admin,Driver,Maintainance}  from './Fire'
const AuthContext=React.createContext()
export const Auth=()=>{
    return useContext(AuthContext)
}
export const Context = ({children}) => {
    const[loading,setLoading]=useState(true)
    const[currentAdmin,setCurrentAdmin]=useState()
    const[currentDriver,setCurrentDriver]=useState()
    const[currentMaintain,setCurrentMaintain]=useState()
    function Driversignup(email,password){
        return Driver.createUserWithEmailAndPassword(email,password)
     }
     function Maintainsignup(email,password){
        return Maintainance.createUserWithEmailAndPassword(email,password)
     }
    function Adminlogin(email,password){
        return Admin.signInWithEmailAndPassword(email,password)
    }
    function Driverlogin(email,password){
        return Driver.signInWithEmailAndPassword(email,password)
    }
    function Maintainlogin(email,password){
        return Maintainance.signInWithEmailAndPassword(email,password)
    }
    
    useEffect(()=>{
        const unsub=Admin.onAuthStateChanged(user=>{
            setCurrentAdmin(user)
            setLoading(false)
        })
        return unsub
    },[])
    useEffect(()=>{
        const unsub=Driver.onAuthStateChanged(user=>{
            setCurrentDriver(user)
            setLoading(false)
        })
        return unsub
    },[])
    useEffect(()=>{
        const unsub=Maintainance.onAuthStateChanged(user=>{
            setCurrentMaintain(user)
            setLoading(false)
        })
        return unsub
    },[])
    
    const values={
        currentAdmin,
        currentDriver,
        currentMaintain,
        loading,
     Adminlogin,
     Driverlogin,
     Maintainlogin,
     Driversignup,
     Maintainsignup,
    
    }
    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
      )
}
export default Context
