import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { validateSignupForm } from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(''); // New state for handling API errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form values
    const validationErrors = validateSignupForm(values);
    
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          navigate('/'); // Redirect to home page on successful signup
        })
        .catch(err => {
          console.error('Error during signup:', err);
          setSubmitError('Failed to register. Please try again.'); // Show error message
        });
    } else {
      setErrors(validationErrors); // Show validation errors
    }
  };

  return (
    <div className="signup-page"> {/* New wrapping div */}
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="signup-card-3d">
            <Card.Body>
              <h3 className="text-center">Sign Up</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name" 
                    value={values.name} 
                    onChange={handleChange} 
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email" 
                    value={values.email} 
                    onChange={handleChange} 
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    name="password" 
                    value={values.password} 
                    onChange={handleChange} 
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {submitError && (
                  <div className="alert alert-danger" role="alert">
                    {submitError}
                  </div>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  Signup
                </Button>
                
                <p className="text-center mt-3">You agree to our terms and conditions</p>
                
                <Link to="/">
                  <Button variant="secondary" className="w-100">
                    Login
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Signup;
