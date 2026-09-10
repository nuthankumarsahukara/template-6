import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddDoctor() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [specialization, setSpecialization] = useState("");
    let [salary, setSalary] = useState("");
    let navigator = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        let newDoctor = {
            name, age, gender, specialization, salary
        };

        await axios.post("https://doctor-api-egaa.onrender.com/doctors", newDoctor);
        alert("Doctor Added Successfully....")
        setName("");
        setGender("");
        setAge("");
        setSalary("");
        setSpecialization("");
        navigator("/")
    }
    let container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    }
    return (
        <div style={container}>
            <form className='form' onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center',margin:"25px 5px"}}>Add New Doctor</h1>
                <input type='text' placeholder='Enter Doctor Name' value={name}
                    onChange={(e) => setName(e.target.value)} className='text-box' />
                <input type='number' placeholder='Enter Doctor Age' value={age}
                    onChange={(e) => setAge(e.target.value)} className='text-box' />
                <select value={gender} onChange={(e) => setGender(e.target.value)} className='text-box'>
                    <option value="">Select the Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type='text' placeholder='Enter Doctor Specialization' value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)} className='text-box' />
                <input type='number' placeholder='Enter Doctor Salary' value={salary}
                    onChange={(e) => setSalary(e.target.value)} className='text-box' />
                <button className='btn-2' style={{ background: "black", color: "white" }}>Add Doctor</button>
            </form>
        </div>
    )
}
