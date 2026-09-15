import { useEffect, useState } from 'react'
import Doctorcard from '../components/Doctorcard';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Home() {
    let [search, setSearch] = useState("");
    let [specialization, setSpecialization] = useState("");
    let [doctor, setDoctor] = useState([]);

    async function getDetails() {
        let res = await axios.get('https://api-bdti.onrender.com/doctors')
        setDoctor(res.data)
    }

    useEffect(() => {
        getDetails()
    }, [])

    let filteredDoctors = doctor.filter((doctor) => {
        let matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase())
        let matchesSpecialization = specialization === "" || doctor.specialization === specialization

        return matchesSearch && matchesSpecialization
    })

    useEffect(() => (
        console.log("Home Page loaded")
    ), [])

    async function handleDelete(id) {
        try {
            const result = await Swal.fire({
                icon: "warning",
                title: "Are You Sure ?",
                text: "Do you want to delete Doctor ?",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "Cancel"
            })
            if (result.isConfirmed) {
                await axios.delete(`https://api-bdti.onrender.com/doctors/${id}`);
                await getDetails()
                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Doctor Deleted Successfully.",
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        } catch (error) {
            console.log("Error deleting doctor :", error);
        }
    }

    return (
        < div className='doctor-container'>
            <div className='searchbar'>
                <h1>Search For Doctor:
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} /><br /><br />
                </h1>
                <h1>Specialization:
                    <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                        <option value="">All</option>
                        <option value="Muscles">Muscles</option>
                        <option value="Bones">Bones</option>
                        <option value="cardio">Cardio</option>
                        <option value="Blood Pressure">Blood Pressure</option>
                    </select>
                </h1>
            </div>
            {
                filteredDoctors.length > 0 ?
                    <div className='container'>
                        {
                            filteredDoctors.map((d) => (
                                <Doctorcard key={d.id} id={d.id} name={d.name} gender={d.gender} salary={d.salary} age={d.age} specialization={d.specialization} handleDelete={handleDelete} />
                            ))
                        }
                    </div>
                    : <h1 align='center'>No Doctor Found</h1>
            }
        </div >
    )
}


{/* <div className='container'>
        <Doctorcard name="Dr. Nuthan" gender="Male" specialization="Muscles" />
        <Doctorcard name="Dr. Ravi" gender="Male" specialization="Cardiology" />
        <Doctorcard name="Dr. Priya" gender="Female" specialization="Neurology" />
        <Doctorcard name="Dr. Madhu" gender="Female" specialization="General Doctor" />
        <Doctorcard name="Dr. Rahul" gender="Male" specialization="ENT" />
        <Doctorcard name="Dr. Rani" gender="Female" specialization="Dentist" />
        <Doctorcard name="Dr. Yamini" gender="Female" specialization="Gynecology" />
        {doctor.length > 0 ? result : <h1>No Doctors Found</h1>}
    </div>
    
    let result = doctor.map((d) => (
      <Doctorcard key={d.id} name={d.name} specialization={d.specialization} gender={d.gender} />
    ))
*/}