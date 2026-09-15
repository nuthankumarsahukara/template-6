import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserProvider';

export default function Login() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let { loginUser } = useContext(UserContext);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://api-bdti.onrender.com/login",
        { email, password }
      );
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: res.data.message,
          confirmButtonText: "OK"
        }).then(() => {
          loginUser(res.data.patient.email);
          navigate("/");
        });
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.response.data.message,
          confirmButtonText: "OK"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Unable to connect to the server",
          confirmButtonText: "OK"
        });
      }
    }
  }

  let form = {
    padding: "80px 30px",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
    margin: "20px auto",
    width: "450px",
    backgroundColor: "rgba(0,0,0,0.1)"
  }

  let container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh"
  }

  let input = {
    padding: "10px 5px",
    width: "100%",
    borderRadius: "8px",
    outline: "none",
    border: "2px solid black",
    margin: "8px 2px"
  }

  let btn = {
    width: "100%",
    padding: "10px 5px",
    borderRadius: "8px",
    fontSize: "18px",
    backgroundColor: "black",
    color: "white"
  }

  return (
    <div style={container}>
      <form style={form} onSubmit={handleSubmit}>
        <h1 align="center">Login Page</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          style={input}
          autoComplete="email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          style={input}
          autoComplete="current-password"
        />
        <br />
        <button type="submit" style={btn}>
          Login
        </button>
      </form>
    </div>
  )
}
