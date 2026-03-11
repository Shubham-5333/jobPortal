import React, { useEffect, useState } from "react";
import "../assets/login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RiGroupLine } from 'react-icons/ri'



const Register = () => {

  const navigate = (useNavigate())

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      course,
      password
    };

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Registration successful");
        navigate("/");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-login-container">
      <div className="login-left">
        <div className="border-st">
          <span> <RiGroupLine size={18} /> Join 10k+ professionals today</span>
        </div>
        <h1>Start your career journey with us.</h1>
        <p className="left-description">
          Create an account and connect with top companies hiring
          talented professionals worldwide.
        </p>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>SignUp</h2><br /><br />

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required className="form-select"
          >
            <option value="">Select Course</option>
            <option value="MERN Stack Development">MERN Stack Development</option>
            {/* <option value="Data Science"></option> */}
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Flutter Development">Flutter Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Python Developer">Python Developer</option>
          </select>
          <br></br>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">SignUp</button>

          <p style={{ display: 'flex', marginTop: '40px', justifyContent: 'center' }}>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default Register;