import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Jobs.css'
import { RiBookmarkFill } from 'react-icons/ri'
import company from '/company.jpg'
import companylogo from '/company-logo.png'
import location from '/location.png'


const SavedJobs = () => {

    const [savedJobs, setSavedJobs] = useState([
        {
            id: 1,
            title: "Frontend Developer",
            company: "ABC Tech",
            location: "Remote",
            salary: "$70,000 - $90,000",
            posted: "2 days ago",
            description: "Looking for a React developer with 2+ years experience."
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "San Francisco",
            salary: "$60,000 - $85,000",
            posted: "1 week ago",
            description: "Strong experience in Figma and modern UI trends."
        }
    ]);

    // const removeJob = (id) => {
    //     setSavedJobs(savedJobs.filter(job => job.id !== id));
    // };

    return (
        <div
            style={{
                backgroundColor: '#E2E8F0',
                display: "flex",
                justifyContent: "center",
                minHeight: "80vh",
                padding: "100px"
            }}
        >
            <div style={{ width: "700px" }}>
                <h1><b>Saved Jobs</b></h1>
                <p>Jobs you have bookmarked.</p>

                {savedJobs.length === 0 && (
                    <p style={{ marginTop: "20px" }}>No saved jobs yet.</p>
                )}

                {savedJobs.map((job) => (
                    <div
                        key={job.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "10px 15px",
                            marginBottom: "20px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            backgroundColor: "#fff",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#E2E8F0',
                                width: '80px',
                                height: '80px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '20px'
                            }}
                        >
                            <img
                                src={companylogo}
                                alt="logo"
                                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                            />
                        </div>

                        <div style={{ flex: 1, paddingRight: "60px" }}>
                            <small style={{ color: "blue", fontWeight: 'bold' }}>
                                Posted {job.posted}
                            </small>

                            <h4 style={{ marginBottom: "5px", fontWeight: 'bolder' }}>
                                {job.title}
                            </h4>

                            <p style={{ color: '#64748B', margin: "6px 0", fontSize: "13px" }}>
                                <img className='images' src={company} alt="" /> {job.company}
                            </p>

                            <p style={{ color: '#64748B', margin: "6px 0", fontSize: "13px" }}>
                                <img className='images' src={location} alt="" /> {job.location} ● {job.salary}
                            </p>

                            <p style={{ color: '#64748B', margin: "6px 0", fontSize: "13px" }}>
                                {job.description}
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-end"
                            }}
                        >
                            <RiBookmarkFill size={20} color="#007bff" />

                            <button
                                onClick={() => alert(`Applied for ${job.title}`)}
                                style={{
                                    padding: "8px 18px",
                                    borderRadius: "6px",
                                    border: "none",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedJobs;