import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email address.");
            return;
        }
        setMessage("Password reset link has been sent to your email.");
        setEmail("");
    };

    return (
        <div
            style={{
                backgroundColor: '#E2E8F0',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            }}
        >
            <div
                style={{
                    width: "400px",
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
            >
                <h3 style={{ marginBottom: "10px" }}>
                    Forgot Password
                </h3>

                <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "20px" }}>
                    Enter your registered email address and we’ll send you a reset link.
                </p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <label><b>Email</b></label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "6px",
                            border: "none",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            cursor: "pointer"
                        }}
                    >
                        Send Reset Link
                    </button>
                </form>

                {message && (
                    <p style={{ marginTop: "15px", fontSize: "14px", color: "green" }}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;