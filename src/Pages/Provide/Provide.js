import React from 'react';
import { Card } from 'react-bootstrap';
import './Provide.css';

const Provide = () => {
    return (
        <div className="container pt-5">
            <h1 className="text-center pb-5 text-info">Doctor Care Provide</h1>
            <div className="row">
                <div className="col">
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>24 Hours Open</Card.Header>
                    <Card.Body>
                    <Card.Title>Doctor Chamber</Card.Title>
                    <Card.Text>
                    Gynecology & Obstetrics. The Department of Obstetrics & Gynaecology of Amar Hospital provides comprehensive services to women in the treatment and ...
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col">
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>We Prodvice Helicopter</Card.Header>
                    <Card.Body>
                    <Card.Title>Emergency Helicopter Medics</Card.Title>
                    <Card.Text>
                    Following some of Britain's busiest and best air ambulance teams as they carry out lifesaving services and hospital-level treatment  
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col">
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>24 Hours Available</Card.Header>
                    <Card.Body>
                    <Card.Title>Ambulance Services</Card.Title>
                    <Card.Text>
                    The term ambulance comes from the Latin word "ambulare" as meaning "to walk or move about" which is a reference to early medical care
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default Provide;