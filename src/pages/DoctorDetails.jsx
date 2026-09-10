import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

function DoctorDetails() {
    const { id } = useParams()
    let navigator = useNavigate();
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [specialization, setSpecialization] = useState("");
    let [salary, setSalary] = useState("");

    let fectchData = async () => {
        let res = await axios.get(`https://doctor-api-egaa.onrender.com/doctors/${id}`)
        let data = res.data
        setName(data.name ?? "");
        setAge(data.age ?? "");
        setGender(data.gender ?? "");
        setSpecialization(data.specialization ?? "");
        setSalary(data.salary ?? "")
    }
    useEffect(() => {
        fectchData();
    }, [])

    let handleUpdate = async (e) => {
        e.preventDefault();
        let updateData = { name, age, gender, specialization, salary }
        await axios.put(`https://doctor-api-egaa.onrender.com/doctors/${id}`, updateData)
        alert('Update Doctor Details Successfully.....')
        navigator("/")
    }

    return (
        <div className=''>
            <h1 style={{ textAlign: 'center' }}>Update New Doctor</h1>
            <form className='form' onSubmit={handleUpdate}>
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
                <button className='btn-2' style={{ background: "black", color: "white" }}>Update Doctor</button>
            </form>
        </div>
    )
}

export default DoctorDetails;