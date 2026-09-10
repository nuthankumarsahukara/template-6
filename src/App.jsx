import Navbar from './components/Navbar'
import './App.css'
import AddDoctor from './pages/AddDoctor'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import DoctorDetails from './pages/DoctorDetails'
import Patient from './pages/Patient'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/addDoctor" element={<AddDoctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
