import React from "react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){
    
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    const [toast,setToast]=useState(null)

    useEffect(()=>{
        if(toast){
            const timerId=setTimeout(()=>{
                setToast(null)
            },3000)
            return ()=>clearTimeout(timerId)
        }
    },[toast])

    const handleChange=(e)=>{
        return setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const response=await fetch("http://localhost:5000/api/auth/signup",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            })
            const data=await response.json()

            if(!response.ok){
                throw new Error(data.message || "Signup failed")
            }
            setToast({message:"Signup successfull",type:"success"})
            setTimeout(()=>{navigate("/login")},1500)

        } catch (error) {
            setToast({message:err.message,type:"error"})
        } finally{
            setLoading(false)
        }
    }

    return(
        <div>
            
        </div>
    )
}
export default Signup