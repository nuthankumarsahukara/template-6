import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';
import Swal from 'sweetalert2';

export default function Navbar() {
    let navigation = useNavigate();
    //let token = localStorage.getItem("token")
    let { user, logoutUser } = useContext(UserContext);
    function logout() {
        //localStorage.removeItem("token")
        Swal.fire({
            icon: "warning",
            title: "Are you Sure ?",
            text: "You want to logout from your account ?",
            showCancelButton: true,
            confirmButtonText: "Yes,Logout",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser();
                navigation("/")

                Swal.fire({
                    icon: "success",
                    title: "Logged Out",
                    text: "You have been Logged out Successfully.",
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        })
    }
    return (
        <div className='navbar'>
            <h1>Doctor Application</h1>
            <div className='nav-links'>
                <button className='btn-1' onClick={() => navigation("/")}>Home</button>
                {
                    user ? (
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

