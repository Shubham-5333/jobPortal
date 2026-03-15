import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/Sidebar.css";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine, RiSuitcaseLine, RiBookmarkLine } from 'react-icons/ri'
import iconman from '/iconman.png'

const Sidebar = () => {

  const navigate = useNavigate()

  const [profileImage, setProfileImage] = useState(iconman);
  const [userName, setUserName] = useState("");

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response = await fetch("http://localhost:3000/api/profile", {
          method: "GET",
          credentials: "include"
        });

        const data = await response.json();

        if (data.image) {
          setProfileImage(data.image);
        } else {
          setProfileImage(iconman)
        }

        setUserName(data.name);

      } catch (error) {
        console.log("Sidebar profile error:", error);
      }

    };

    fetchProfile();

  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (

    <div className="sidebar">
      <div className="profile">
        <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>

          <span className="profile-name">
            <img
              style={{ width: '50px', height: '50px' }}
              src={profileImage}
              alt="profile"
              className="profile-img"
            />
            <b> {userName}</b>
          </span>

        </Link>
      </div>

      <br /><br />

      <ul className='menu'>

        <NavLink to='/jobs' className="menu-link">
          <li><RiSuitcaseLine size={22} /> Jobs</li>
        </NavLink>

        <NavLink to='/savedjobs' className="menu-link">
          <li><RiBookmarkLine size={22} /> Saved Jobs</li>
        </NavLink>
      

        

        <li className='logout-button' onClick={handleLogout}>
          <RiLogoutBoxRLine /> Logout
        </li>

      </ul>
    </div>  

  );
};

export default Sidebar;