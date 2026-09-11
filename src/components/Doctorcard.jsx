import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider";

export default function Doctorcard(props) {
    let navigator = useNavigate();
    //let token = localStorage.getItem("token");
    let { user } = useContext(UserContext)
    return (
        <div className='card'>
            <div className='card-body'>
                <img src="https://media.lordicon.com/icons/wired/lineal/673-avatar-woman-doctor.svg" alt="image" width={100} />
                <div>
                    <h3>Name :{props.name}</h3>
                    <p>Specialization :{props.specialization}</p>
                    <p>Gender :{props.gender}</p>
                    <p>Salary :{props.salary}</p>
                    <p>Age : {props.age}</p>
                </div>
            </div>
            {
                user ? (
                    <>
                        <button className="btn-2" style={{ backgroundColor: "blue" }} onClick={() => navigator(`/doctor/${props.id}`)}>Update</button>
                        <button className='btn-2' onClick={() => props.handleDelete(props.id)}>Delete</button>
                    </>
                )
                    : ""
            }

        </div>
    )
}
