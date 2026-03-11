import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/Sidebar.css";
import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine,RiSuitcaseLine,RiBookmarkLine,RiUserLine  } from 'react-icons/ri'
// import jobicon from '/jobicon.png'
import iconman from '/iconman.png'
// import saveicon from '/saveicon.png'



const Sidebar = () => {
  return (

    <div className="sidebar">
      <div className="profile">
        <Link to ='/profile' style={{ textDecoration: 'none', color: 'black' }}>
        {/* <img
          src={iconman}
          alt="profile"
          className="profile-img"
        /> */}
        <span className="profile-name"><RiUserLine size={35}/><b> John Doe</b></span>
        </Link>
      </div>
      <br /> 
      <br />
      <ul className="menu">
        <Link to='/jobs' style={{ textDecoration: 'none', color: '#475569' }}>
          <li><b><RiSuitcaseLine size={22}/></b> Jobs</li>
        </Link>
        {/* <li><img className='images' src={messages} /> Messages</li> */}
        <Link to='/savedjobs' style={{ textDecoration: 'none', color: '#475569' }}>
          <li><RiBookmarkLine size={22}/> Saved Jobs</li>
        </Link>
        <li className='logout-button'><RiLogoutBoxRLine /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;