import { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

function Profile() {
  const { token } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    name:""
  })
  const [toast, setToast] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatingPassword,setUpdatingPassword]=useState(false)
  const [pass,setPass]=useState({
    oldPassword:"",
    newPassword:""
  })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/profile/me",
          {
            method: "GET",
            headers: {"Content-Type": "application/json",Authorization: `Bearer ${token}`,},
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Cannot Fetch Profile");
        }
        setData(data.user);
        setFormData(data.user)
      } catch (error) {
        setToast({message: error.message,type: "error"});
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/profile/update",
        {
          method: "PUT",
          headers: {"Content-Type": "application/json",Authorization: `Bearer ${token}`,},
          body: JSON.stringify({
            name: formData.name}),
        }
      );

      const data = await response.json();
    
console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Cannot Update Profile");
      }

      setData(data.updatedUser);

      setFormData({
        name: data.updatedUser.name,
      });
      setToast({
        message: "Profile Updated Successfully 🎉",
        type: "success",
      });
    } catch (error) {
      setToast({ message: error.message, type: "error",});
    } finally{
        setIsEditing(false)
    }
  };

  const handleEditPassword = () => {
    setUpdatingPassword(true);
  };
  const handleChangePassword = (e) => {
    e.preventDefault()
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };

   const handleSavePassword = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/api/profile/change-password",
        {
          method: "PUT",
          headers: {"Content-Type": "application/json",Authorization: `Bearer ${token}`,},
          body: JSON.stringify(pass),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Cannot Update Profile");
      }
      setToast({
        message: "Password Updated Successfully 🎉",
        type: "success",
      });
    } catch (error) {
      setToast({ message: error.message, type: "error",});
    } finally{
        setUpdatingPassword(false)
    }
    setPass({ oldPassword: "",newPassword: ""});
  };
  
  return(
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
              url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2200&q=80")`,}}>
              <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-2xl p-8">

                <div className="text-center mb-7">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg">
                    👤
                  </div>
                  <h1 className="text-3xl font-bold text-white">My Profile</h1>
                  <p className="text-gray-200 mt-2">Manage your BriefX account</p>
                </div>

                <div className="space-y-5">

                  <div>
                    <p className="text-sm text-gray-300 mb-1">Full Name</p>
                    <div className="rounded-xl bg-white/20 p-3 text-lg font-semibold text-white">{data?.name}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email</p>
                    <div className="rounded-xl bg-white/20 p-3 text-lg font-semibold text-white">{data?.email}</div>
                  </div>
                </div>

                <div className="mt-7 flex gap-4">
                  <button onClick={handleEdit} className="btn btn-primary flex-1" >Edit Profile</button>
                  <button onClick={handleEditPassword} className="btn btn-warning flex-1">Change Password</button>
                </div>

                {isEditing && (
                  <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-5">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter New Name"
                    className="input input-bordered w-full bg-white"/>
                    <button onClick={handleSave} className="btn btn-success w-full mt-4" >Save Changes</button>
                  </div>)}

                {updatingPassword && (
                  <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-5 space-y-4">
                    <input type="password" name="oldPassword" value={pass.oldPassword} onChange={handleChangePassword} placeholder="Current Password"
                    className="input input-bordered w-full bg-white"/>
                    <input type="password" name="newPassword" value={pass.newPassword} onChange={handleChangePassword} placeholder="New Password"
                    className="input input-bordered w-full bg-white"/>
                    <button onClick={handleSavePassword} className="btn btn-success w-full">Update Password</button>
                  </div>)}

                {toast && (
                  <div className={`alert mt-6 ${toast.type === "success"? "alert-success": "alert-error"}`}>
                    <span>{toast.message}</span>
                  </div>)}

              </div>
    </div>
  )
}

export default Profile;