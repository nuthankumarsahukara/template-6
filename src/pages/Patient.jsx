import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Patient() {
    let [data, setData] = useState([]);
    useEffect(() => {
        async function getDetails() {
            let res = await axios.get('https://api-bdti.onrender.com/patients');
            let data = await res.data;
            setData(data);
        }
        getDetails();
    }, [])
    let a = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        padding: "25px",
        margin: "20px",
    }
    let card = {
        border: "2px solid black",
        padding: "20px 40px",
        borderRadius: "8px",
        width: "300px"
    }
    return (
        <div style={a}>
            {
                data.length > 0 ?
                    data.map((d) => (
                        <div key={d.id} style={card}>
                            <p>Name : {d.name}</p>
                            <p>Disease : {d.disease}</p>
                            <p>Gender : {d.gender}</p>
                            <p>Age : {d.age}</p>
                            <p>Weight : {d.weight}</p>
                            <p>Email : {d.email}</p>
                        </div>
                    )) : <h1 align="center">No Patients Found</h1>
            }
        </div>
    )
}
