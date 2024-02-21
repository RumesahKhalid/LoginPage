import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignUp = () => {
        // Validate password
        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        // Continue with sign-up process
        setPasswordError(""); // Reset password error
        // Assuming you would have a function to handle signup
        // For demonstration, let's just console.log the values
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", newPassword);
        // After successful signup, switch to login
        setAction("Login");
    };

    const handleLogin = () => {
        // Handle login
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : (
                    <div className='input'>
                        <FaUser className='icon' />
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                )}
                {action === "Login" || action === "Sign Up" ? (
                    <div className='input'>
                        <FaEnvelope className='icon' />
                        <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                ) : null}
                {action === "Login" ? (
                    <div className='input'>
                        <FaLock className='icon' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                ) : (
                    <>
                        <div className='input'>
                            <FaLock className='icon' />
                            <input type="password" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div className='input'>
                            <FaLock className='icon' />
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {passwordError && <div className="error">{passwordError}</div>}
                    </>
                )}
            </div>
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
            <div className='submit-container'>
                {action === "Login" ? (
                    <>
                        <div className="submit" onClick={handleLogin}>Login</div>
                        <div className="submit gray" onClick={() => setAction("Sign Up")}>Sign Up</div>
                    </>
                ) : (
                    <>
                        <div className="submit" onClick={handleSignUp}>Sign Up</div>
                        <div className="submit gray" onClick={() => setAction("Login")}>Login</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;
