import React from 'react'

export default function UpdateDoctor() {
  return (
    <div className=''>
      <h1 style={{ textAlign: 'center' }}>Add New Doctor</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Doctor Name' value={data.name}
          onChange={(e) => setName(e.target.value)} className='text-box' />
        <input type='number' placeholder='Enter Doctor Age' value={data.age}
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
