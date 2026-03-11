import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Jobs.css'
import iconman from '/iconman.png'

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@email.com",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{
                backgroundColor: '#E2E8F0',
                display: "flex",
                justifyContent: "center",
                minHeight: "80vh",
                padding: "150px"
            }}
        >
            <div
                style={{
                    width: "600px",
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
            >
                <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

                {/* Profile Image */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <img
                        src={iconman}
                        alt="profile"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    />
                </div>

                {/* Name */}
                <div style={{ marginBottom: "15px" }}>
                    <label><b>Name</b></label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="form-control"
                    />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "15px" }}>
                    <label><b>Email</b></label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="form-control"
                    />
                </div>

                {/* Bio */}
                
                {/* Buttons */}
                <div style={{ textAlign: "right" }}>
                    {isEditing ? (
                        <button
                            onClick={() => setIsEditing(false)}
                            style={{
                                padding: "8px 18px",
                                borderRadius: "6px",
                                border: "none",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            style={{
                                padding: "8px 18px",
                                borderRadius: "6px",
                                border: "1px solid #007bff",
                                backgroundColor: "#fff",
                                color: "#007bff",
                                cursor: "pointer"
                            }}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;