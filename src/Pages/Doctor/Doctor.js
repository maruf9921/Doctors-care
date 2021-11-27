
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const { id, img, name, specialist, discription } = doctor;
    return (
        <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Subtitle className="text-center p-3">{specialist}</Card.Subtitle>
                    <Card.Text className="text-center">
                    {discription}
                    </Card.Text>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link to={`/appiontment/${id}`}>
                        <button className="btn btn-info fw-bold text-light" type="button">View Detials</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;