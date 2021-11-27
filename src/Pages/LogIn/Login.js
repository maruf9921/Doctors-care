
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {singInwithGoogle, handleRegistration, handleEmailChange, handlePasswodChange, error, toggleLogin, isLogin, handleNameChannge } = useAuth();
    
    return (
        <div className='container'>
            <Form onSubmit={handleRegistration} className="login-form">
                <h2 className="text-center text-info">{isLogin ? 'Log In' : 'Sing Up'}</h2>
                    {!isLogin && <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control onBlur={handleNameChannge} type="text" placeholder="Enter Your Name"  required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswodChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group onChange={toggleLogin} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Already Registered?" />
                    </Form.Group>
                    <div className="text-danger pb-3">{error}</div>
                    
                    
                    <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-info fw-bold text-light">{isLogin ? 'Log In' : 'Sing Up'}</button>
                        {!isLogin && <button onClick={singInwithGoogle} className="btn btn-info fw-bold text-light" type="button">Sing Up with Google</button>}
                    </div>
            </Form>
        </div>
    );
};

export default Login;