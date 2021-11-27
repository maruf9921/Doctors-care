import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Appiontment = () => {
    const { appiontmentId } =useParams();
    const [doctordetails, setDoctordetails] = useState([]);
    const [singledoctor, setSingledoctor] = useState({});

    useEffect( () =>{
        fetch('/doctorDetails.json')
        .then(Response => Response.json())
        .then(data => setDoctordetails(data.docotor))
    }, [])

    useEffect( () =>{
        const foundDoctor = doctordetails.find(doctor => doctor.userid === appiontmentId);
        setSingledoctor(foundDoctor);
    }, [doctordetails])

    return (
        <div className="container my-5">
            <Card style={{ width: '80rem' }}>
                <Card.Img variant="top" src={singledoctor?.img} />
                <Card.Body>
                    <Card.Title className="text-center p-3">{singledoctor?.name}</Card.Title>
                    <Card.Subtitle className="text-center p-3">{singledoctor?.specialist}</Card.Subtitle>
                    <p className="text-center p-3">Email: {singledoctor?.email}</p>
                    <Card.Text className="text-center p-3">
                    {singledoctor?.discription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Appiontment;