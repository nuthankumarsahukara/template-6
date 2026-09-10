import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let [doctor, setDoctor] = useState([]);
    let [data, setData] = useState({
        name: "",
        age: "",
        gender: "",
        weight: "",
        email: "",
        disease: "",
        doctor: null
    })
    let navigate = useNavigate()
    function handleData(e) {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(data)
        await axios.post("https://api-bdti.onrender.com/patients", data)
            .then(res => console.log(res.data))
        alert('Patient Added Successfully....')
        navigate("/login")
    }
    useEffect(() => {
        async function getDetails() {
            let res = await axios.get('https://api-bdti.onrender.com/doctors')
            setDoctor(res.data)
        }
        getDetails();
    }, [])
    let container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    }
    let form = {
        border: "2px solid black",
        padding: "50px 20px",
        borderRadius: "8px",
        width: "450px",
        backgroundColor: "rgba(0,0,0,0.2)"
    }
    let title = {
        textAlign: "center",
        margin: "10px 5px"
    }
    let input = {
        padding: "10px 5px",
        width: "100%",
        margin: "5px 0px",
        borderRadius: "10px",
        outline: "none",
        border: "2px solid black"
    }
    let button = {
        width: "100%",
        padding: "10px 5px",
        backgroundColor: "lightblue",
        border: "2px solid",
        borderRadius: "25px",
        cursor: "pointer",
        margin: "5px 0px"
    }
    return (
        <div style={container}>
            <form style={form}>
                <h1 style={title}>Register Form</h1>
                <input type="text" style={input} name="name" placeholder='Enter your name' onChange={handleData} /> <br />
                <input type="text" style={input} name="age" placeholder='Enter your age' onChange={handleData} /> <br />
                <input type="text" style={input} name="gender" placeholder='Enter your gender' onChange={handleData} /> <br />
                <input type="text" style={input} name="weight" placeholder='Enter your weight' onChange={handleData} /> <br />
                <input type="text" style={input} name="email" placeholder='Enter your email' onChange={handleData} /> <br />
                <input type="password" style={input} name="password" placeholder='Enter your password' onChange={handleData} /> <br />
                <input type="text" style={input} name="disease" placeholder='Enter your disease' onChange={handleData} /> <br />
                <select style={input} name="doctorId" onChange={handleData}>
                    <option value="">Select the Doctor</option>
                    {
                        doctor.map((d) => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))
                    }
                </select> <br />
                <button style={button} onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}
