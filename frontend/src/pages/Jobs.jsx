import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Jobs.css'
import { RiBookmarkLine,RiBuildingLine } from 'react-icons/ri'
import company from '/company.jpg'
import companylogo from '/company-logo.png'
import location from '/location.png'


const Job = () => {
    // const arr = [];
    
    const jobs = [
        {
            id: 1,
            title: "MERN Stack Developer",
            company: "ABC Tech",
            location: "Remote",
            salary: "$70,000 - $90,000",
            posted: "2 days ago",
            description: "Looking for a React developer with 2+ years experience."
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "XYZ Solutions",
            location: "New York",
            salary: "$80,000 - $100,000",
            posted: "5 days ago",
            description: "Node.js and MongoDB experience required."
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "San Francisco",
            salary: "$60,000 - $85,000",
            posted: "1 week ago",
            description: "Strong experience in Figma and modern UI trends."
        }
    ];
    const [filteredJobs, setFilteredJobs] = useState(jobs);



    const handleFilter = (title) => {
        if (title === "All") {
            setFilteredJobs(jobs);
        } else {
            const result = jobs.filter((item) => item.title === title);
            setFilteredJobs(result);
        }
    };

    return (
        <div
            style={{
                backgroundColor: '#E2E8F0',
                display: "flex",
                justifyContent: "center",
                // minHeight: "80vh",
                padding: "100px"
            }}
        >
            <div style={{ width: "700px" }}>
                <h1 style={{fontFamily:"'Inter', sans-serif"}}><b>Explore Jobs</b></h1>
                <p style={{color:'#64748B',fontFamily:"'Inter', sans-serif"}}>Your next career move is just a click away. </p>

                {/* Filter Buttons */}
                <button onClick={() => handleFilter("All")} className="button-container">All Jobs</button>
                <button onClick={() => handleFilter("UI/UX Designer")} className="button-container">UI/UX Designer</button>
                <button onClick={() => handleFilter("MERN Stack Developer")} className="button-container">MERN Stack Developer</button>
                <button onClick={() => handleFilter("Video Editor")} className="button-container">Video Editor</button>
                <button onClick={() => handleFilter("Flutter Developer")} className="button-container">Flutter Developer</button>

                
                {filteredJobs.map((job) => (
                    <div
                        key={job.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "10px 15px",
                            marginTop: "20px",
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
                                marginRight: '20px'   // 👈 This adds space
                            }}
                        >
                            {/* <img
                                src={companylogo}
                                alt="logo"
                                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                            /> */}<RiBuildingLine size={40}/>
                        </div>

                        <div style={{ flex: 1, paddingRight: "60px" }}>
                            <small style={{ color: "blue", fontWeight: 'bold',fontFamily:"'Inter', sans-serif" }}>
                                Posted {job.posted}
                            </small>
                            <h4 style={{ fontFamily:"'Inter', sans-serif",marginBottom: "5px", fontWeight: 'bolder' }}>{job.title}</h4>
                            <p style={{ fontFamily:"'Inter', sans-serif",color: '#64748B', margin: "6px 0", fontSize: "13px" }}><img style={{ color: '#64748B', }} className='images' src={company} /> {job.company}</p>
                            <p style={{fontFamily:"'Inter', sans-serif", color: '#64748B', margin: "6px 0", fontSize: "13px" }}>
                                <strong><img className='images' style={{fontFamily:"'Inter', sans-serif", color: '#64748B' }} src={location} /> </strong> {job.location} ● {job.salary}
                            </p>

                            {/* <p style={{ margin: "5px 0", color: "green", fontWeight: "600" }}>
                                
                            </p> */}
                            



                            <p style={{paddingTop:'10px',fontFamily:"'Inter', sans-serif", color: '#64748B', margin: "6px 0", fontSize: "13px" }}>{job.description}</p>
                        </div>


                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                fontFamily:"'Inter', sans-serif"
                            }}
                        >


                            {/* <button> */}
                            <RiBookmarkLine />
                            {/* </button> */}


                            <button
                                style={{
                                    padding: "8px 18px",
                                    borderRadius: "6px",
                                    border: "none",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    cursor: "pointer",
                                    fontFamily:"'Inter', sans-serif"
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
}

export default Job;