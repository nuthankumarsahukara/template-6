import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        const result = await Swal.fire({
            icon: "question",
            title: "Do you Want ?",
            text: "Are you want to add doctor ?",
            showCancelButton: true,
            confrimButtonText: "Yes",
            cancelButtonText: "Cancel"
        })
        if (result.isConfirmed) {
            await axios.post("https://api-bdti.onrender.com/doctors/", newDoctor);
            Swal.fire({
                icon: "success",
                title: "Added!",
                text: "Doctor Added Successfully.",
                timer: 1500
            })
            setName("");
            setGender("");
            setAge("");
            setSalary("");
            setSpecialization("");
            navigator("/")
        }
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
                <h1 style={{ textAlign: 'center', margin: "25px 5px" }}>Add New Doctor</h1>
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
                <button className='btn-2' style={{ background: "black", color: "white", width: "100%" }}>Add Doctor</button>
            </form>
        </div>
    )
}
