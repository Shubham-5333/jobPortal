import React, { useState } from "react";
import "../assets/Navbar.css";
// import { Link } from "react-router-dom";
// import iconman from '../../public/iconman.png'
// import UserLogin from "./UserLogin";


const Navbar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        console.log("Searching for:", search);
    };

    return (
        <nav
            style={{
                marginLeft:"252px",
                position: "fixed",
                width:'100%',
                height: "80px",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                fontFamily: "'Inter', 'Segoe UI', sans-serif"
            }}
            // className="navbar"
        >

            {/* <div className="profile">
                <img
                    src={iconman}
                    alt="profile"
                    className="profile-img"
                />
                <span className="profile-name"><b>John Doe</b></span>
            </div> */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for Jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                {/* <div className="k">
                    <Link to='/signin'>
                        <button className="signin">SignIn</button>
                    </Link>
                </div> */}
            </div>


        </nav >
    );
};

export default Navbar;