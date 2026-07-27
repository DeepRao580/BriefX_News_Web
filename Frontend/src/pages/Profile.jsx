import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Profile(){
    const[formData, setFormData]= useState({
       name:"",
       email:"",
       currentPassword:"",
       newPassword:"",
       confirmPassword:""
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const[toast,setToast]=useState(null)

    useEffect(()=>{
        if(toast){
            const timerId = setTimeout(()=>{
                setToast(null)
            },2000)
    
            return()=>{clearTimeout(timerId)}
        }
    },[toast])

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            const response=await fetch("http://localhost:5000/api/auth/profile",{
                method:"GET",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name:formData.name, email:formData.email})
            })
            const data=await response.json()
            console.log(data)

            if(!response.ok){
                throw new Error(data.message || "Can't fetch profile")
            }

            setFormData({
                ...formData,
                name:data.name,
                email:data.email
            });
        }catch(error){
            setToast({message: error.message, type:"error"})
        }finally{
            setLoading(false)
        }
    }

    const handlePasswordChange =async()=>{
        const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: {"Content-Type": "application/json"},});
    }

    return(
        <>
        <h1>User Profile</h1>
        </>
    )
}
export default Profile