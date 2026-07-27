import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleChange = (e) => {
    return setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }
      setToast({message: "Signup Successful 🎉",type: "success",});
      setFormData({name: "", email: "",password: "",});
      setTimeout(() => {navigate("/login");}, 1500);
    } catch (error) {
      setToast({message: error.message,type: "error",});
    } finally {
      setLoading(false);
    }
  };

  return (
 <div
  className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)),
      url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2200&q=80")
    `,}}>
      <form>
      <div className="w-full max-w-md rounded-3xl p-8 shadow-2xl bg-cover bg-center"
           style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.30), rgba(255,255,255,0.30)),
                url("https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80")`,}}>
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg">
            📰
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="mt-2 text-gray-500">
            Register yourself to continue with BriefX
          </p>
        </div>
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full h-12"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full h-12"
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full h-12"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="btn btn-primary w-full h-12 text-base"
          >
            {loading ? (
              <div>
                <span className="loading loading-spinner loading-sm"></span>
                Creating...
              </div>
            ) : (
              "Create Account"
            )}
          </button>

        </div>

        <div className="mt-6 text-center text-lg text-gray-600">
          Already have an account?
          <span className="ml-2 cursor-pointer font-semibold text-blue-500 hover:underline">
            <Link to="/login">Login</Link>
          </span>
        </div>

        {toast && (
          <div
            className={`alert mt-6 ${
              toast.type === "success"
                ? "alert-success"
                : "alert-error"
            }`}>
            <span>{toast.message}</span>
          </div>
        )}
        
      </div>
      </form>
    </div>
  );
}
export default Signup;