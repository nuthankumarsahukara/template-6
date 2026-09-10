import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function PatientData() {
    let [data, setData] = useState([]);
    useEffect(() => {
        async function getDetails() {
            let res = await axios.get('https://doctor-api-egaa.onrender.com/doctors')
            setData(res.data);
        }
        getDetails();
    }, [])
    return (
        <div style={{ padding: "40px" }}>
            {
                data.map((d) => (
                    <div key={d.id}>
                        <p>Name : {d.name}</p>
                        <p>Salary : {d.salary}</p>
                        <p>Gender : {d.gender}</p>
                        <p>Age : {d.age}</p>
                        <p>Specialization : {d.specialization}</p>
                        <p>Weight : {d.weight}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}
