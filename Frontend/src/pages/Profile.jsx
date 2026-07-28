import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function Profile(){
    const { token,user, refresh } = useAuthStore();

    const[formData, setFormData]= useState({
       name:user.name,
       email:user.email,
    })

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handlePasswordInput=(e)=>{
        setPasswordData({
            ...passwordData,
            [e.target.name]:e.target.value
        });
    };

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

    const[isEditing,setIsEditing]=useState(false)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const getProfile=async(e)=>{
        try{
            const response=await fetch("http://localhost:5000/api/auth/profile",{
            method:"GET",
            headers:{
                headers:{"Content-Type":"application/json"},
                Authorization:`Bearer ${token}`
            }
        })
        }catch(error){
            throw new Error("Cannot Fetch Profile")
        }
    }

    const handleSave=async(e)=>{
        e.preventDefault()
        try{
            const response=await fetch("http://localhost:5000/api/auth/profile/update",{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            body: JSON.stringify({
                ...formData,
            }),
            });   
            
            const data=await response.json()
            console.log(data)

            if(!response.ok){
                throw new Error(data.message)
            }
            
            refresh({
                name:formData.name
            });
            setToast({ message: "Profile updated successfully", type: "success" });

        }catch(error){
            setToast({message: error.message, type:"error"})
        }finally{
            setIsEditing(false)
        }
    }

    const handlePasswordChange =async(e)=>{
        e.preventDefault()
        if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
            setToast({
            message: "Please fill all fields",
            type: "error",
            });
            return;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setToast({
            message: "Passwords do not match",
            type: "error",
            });
            return;
        }

        try {
            const response = await fetch(
            "http://localhost:5000/api/auth/profile/change-password",
            {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword,
                }),
            }
            );

            const data = await response.json();

            if (!response.ok) {
            throw new Error(data.message || "Unable to change password");
            }

            setToast({message: "Password changed successfully", type: "success",});


            setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "",});

        } catch (error) {
            setToast({message: error.message, type: "error",});
        }
    }

    return(
        <>
        <div className="card w-96 bg-base-100 shadow-sm flex justify-center">
            <div className="card-body">
                <h1 className="flex justify-center">User Profile</h1>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.name}
                disabled={!isEditing}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }/>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={user?.email}
                disabled/>
            </div>

            <div className="flex justify-between">
                <button className="btn btn-outline btn-info" onClick={handleSave}>Update Profile</button>
                <button className="btn btn-outline btn-warning" onClick={handlePasswordChange}>Change Password</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Profile