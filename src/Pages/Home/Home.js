import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider1 from '../../images/slider1.jpeg';


const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-info">Doctors Care Lab</h1>
                    <p className="text-info">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="text-info">Doctors Care Chamber</h1>
                    <p className="text-info">Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="text-info">Doctors Care Medical</h1>
                    <p className="text-info">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;