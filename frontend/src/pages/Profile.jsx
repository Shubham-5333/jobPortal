import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Jobs.css'
import iconman from '/iconman.png'

const Profile = () => {

    const [profileImage, setProfileImage] = useState(iconman);
    const [profileImageFile, setProfileImageFile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    // handle text input change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setProfileImage(reader.result); // base64 string
            };

            reader.readAsDataURL(file);
        }
    };

    // fetch profile
    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await fetch("http://localhost:3000/api/profile", {
                    method: "GET",
                    credentials: "include"
                });

                const data = await response.json();

                console.log("Profile data:", data);

                setUser({
                    name: data.name || "",
                    email: data.email || ""
                });

                if (data.image) {
                    setProfileImage(data.image);   // ✅ FIXED
                }

            } catch (error) {
                console.log("Profile fetch error", error);
            }

        };

        fetchProfile();

    }, []);

    // save profile
    const handleSave = async () => {
        console.log("image is ", profileImage);

        const response = await fetch("http://localhost:3000/api/profile/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                image: profileImage
            })
        });

        const data = await response.json();
        console.log(data);

        setIsEditing(false);
    };

    return (
        <div style={{
            backgroundColor: '#E2E8F0',
            display: "flex",
            justifyContent: "center",
            minHeight: "80vh",
            padding: "150px"
        }}>
            <div style={{
                width: "600px",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}>

                <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

                {/* Profile Image */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>

                    <div style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}>

                        <div style={{
                            width: "170px",
                            height: "170px",
                            borderRadius: "50%",
                            backgroundColor: "#E2E8F0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <img
                                src={profileImage}
                                alt="profile"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}
                            />

                        </div>

                    </div>

                    {isEditing && (
                        <div style={{ marginTop: "10px" }}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="form-control"
                            />
                        </div>
                    )}

                </div>

                {/* Name */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ color: '#64748B', fontWeight: 'bold' }}>NAME</label>
                    <input
                        style={{ backgroundColor: '#F8FAFC' }}
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
                    <label style={{ color: '#64748B', fontWeight: 'bold' }}>EMAIL</label>
                    <input
                        style={{ backgroundColor: '#F8FAFC' }}
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="form-control"
                    />
                </div>

                {/* Buttons */}
                <div style={{ textAlign: "right" }}>
                    {isEditing ? (
                        <button
                            onClick={handleSave}
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