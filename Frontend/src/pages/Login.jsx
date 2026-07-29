import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import useAuthStore from "../store/useAuthStore"
function Login(){
    
    const { token,login }=useAuthStore()
    const[loading, setLoading]=useState(false)
    const[formData, setFormData]=useState({
        email:"",
        password:""
    })

    const[toast,setToast]=useState(null)

    useEffect(()=>{
        if(toast){
            const timerId = setTimeout(()=>{
                setToast(null)
            },3000)

            return()=>{clearTimeout(timerId)}
        }
    },[toast])

    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const emailFormat =/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|bvcoe\.edu\.in)$/;

    if (!emailFormat.test(formData.email)) {
    setToast({
      message: "Please enter a valid Gmail address",
      type: "error",
    });
    return;
  }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            const response=await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            })
            const data=await response.json()
            console.log(data)

            if(!response.ok){
                throw new Error(data.message || "Login Failed")
            }
            
            setFormData({email:"",password:""})
            setToast({message:"Login Successful 🎉", type:"success"})

            setTimeout(()=>{
              login(data.user,data.token)
              navigate("/")},3000)

        }catch(error){
            setToast({message: error.message, type:"error"})
        }finally{
            setLoading(false)
        }
        setFormData({
            email:"",
            password:""
        })
    }


    return (
    <div
    className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)),
      url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2200&q=80")
    `,
    }}>
    <form onSubmit={handleSubmit}>
      <div
        className="w-full max-w-md rounded-3xl bg-cover bg-center p-8 shadow-2xl" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.30), rgba(255,255,255,0.30)),
          url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80")
        `,
        }}>
        <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg">
            🔐
        </div>

        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>

        <p className="mt-2 text-black-500">Login to continue with BriefX</p>
        </div>

        <div className="space-y-5">
          <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="input input-bordered h-12 w-full bg-white"/>

          <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange} className="input input-bordered h-12 w-full bg-white"/>

          <button type="submit" disabled={loading} className="btn btn-primary h-12 w-full text-base">
            {loading ? (<div className="flex items-center gap-2"><span className="loading loading-spinner loading-sm"></span>
                Logging in...</div>) : ("Login")}
          </button>
        </div>

        <div className="mt-6 text-center text-lg text-gray-600">
          Don't have an account?
          <span className="ml-2 cursor-pointer font-semibold text-blue-500 hover:underline">
          <Link to="/signup">Sign Up</Link>
          </span>
        </div>
        {toast && (
          <div className={`alert mt-6 ${toast.type === "success"? "alert-success": "alert-error"}`}>
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </form>
  </div>
);
}
export default Login