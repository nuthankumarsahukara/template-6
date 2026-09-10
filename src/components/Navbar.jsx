import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigation = useNavigate();
    let token = localStorage.getItem("token")
    function logout() {
        localStorage.removeItem("token")
        navigation("/")
    }
    return (
        <div className='navbar'>
            <h1>Doctor Application</h1>
            <div className='nav-links'>
                <button className='btn-1' onClick={() => navigation("/")}>Home</button>
                {
                    token ? (
                        <>
                            <button className='btn-2' onClick={() => navigation("/addDoctor")}>Add Doctor</button>
                            <button className='btn-2' onClick={() => navigation("/patient")}>Patient</button>
                            <button className='btn-2' onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button className='btn-2' onClick={() => navigation("/login")}>Login</button>
                            <button className='btn-2' onClick={() => navigation("/register")}>Register</button>
                        </>
                    )
                }
            </div>
        </div>
    )
}

