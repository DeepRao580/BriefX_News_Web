import React, { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuthStore();
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleLogout = () => {
    setToast({
      type: "success",
      message: "Logged out successfully!",
    });
    setTimeout(() => {
      logout()
      navigate("/login")}, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
         style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                  url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80")`,}}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Logout
        </h2>

        <p className="text-gray-500 mb-8">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={handleLogout} className="btn btn-error text-white px-6">
            Yes
          </button>

          <button onClick={() => navigate(-1)} className="btn btn-outline px-6">
            No
          </button>
        </div>

        {toast && (<div className={`alert mt-6 ${toast.type === "success"? "alert-success": "alert-error"}`}>
            <span>{toast.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Logout;