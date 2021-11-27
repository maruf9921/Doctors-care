import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Services.css';

const Services = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() =>{
        fetch('./doctors.json')
        .then(Response => Response.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <>
        <h1 className="text-center pt-5 text-info">Doctors Care Services</h1>
        <div id="services" className="container py-5 cart">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
        </>
    );
};

export default Services;