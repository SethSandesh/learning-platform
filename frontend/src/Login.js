import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { validateLoginForm } from './LoginValidation';

function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(values);

    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data.success) {
            localStorage.setItem('userId', res.data.userId); // Set user ID in localStorage
            localStorage.setItem('isAuthenticated', 'true'); // Update authentication status
            onLogin(); // Call the onLogin prop to update authentication state
            window.location.href = '/account'; // Redirect to account page
          } else {
            setSubmitError('Invalid email or password. Please try again.');
          }
        })
        .catch(err => {
          console.error('Error during login:', err);
          setSubmitError('Failed to login. Please try again.');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="login-card-3d">
            <Card.Body>
              <h3 className="text-center">Login</h3>
              <Form onSubmit={handleSubmit}>
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
                  Login
                </Button>
                
                <p className="text-center mt-3">Don't have an account? <Link to="/signup">Sign up here</Link></p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
