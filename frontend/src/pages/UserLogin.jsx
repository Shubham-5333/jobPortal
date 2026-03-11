import React, { useState } from "react";
import "../assets/login.css";
import { Link, useNavigate } from "react-router-dom";
import { RiShieldCheckLine } from 'react-icons/ri'


const UserLogin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    }
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("login successful");
        navigate("/jobs");
      }else{
        setErr("wrong email/password")
      }
    } catch (error) {
      console.log("userlogn.jsx", error)
    }

    
  };

  return (
    <div className="main-login-container">


      <div className="login-left">
        <div className="border-st">
          <RiShieldCheckLine />
          <span> TRUSTED BY 10+ PROFESSIONALS</span>
        </div>

        <h1>Find your next career breakthrough today.</h1>

        <p className="left-description">
          Join thousands of professionals finding their dream jobs at
          the world's most innovative companies.
        </p>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>SignIn</h2><br />
          <label className="form-label">Email Address</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* <br></br> */}

          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p style={{color:'red'}}>{err}</p>


          <button type="submit" style={{ marginTop: '20px' }}>SignIn</button>

          <p style={{ marginTop: '10px', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>Forgot Password?</Link>
          </p><br />
          <p style={{ color: "#475569", display: 'flex', justifyContent: 'center', fontFamily: "'Inter',sans-serif" }}>
            Don't have an account? <Link to="/register">Signup</Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default UserLogin;