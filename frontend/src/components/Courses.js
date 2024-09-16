// src/components/Courses.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Navbar, Nav, Spinner, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Courses.css'; // Import your custom CSS file

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);  // Add a loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  // Fetch the list of courses from the backend
  useEffect(() => {
    fetch('http://localhost:8081/api/courses') // Make sure this URL matches your server address
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data);
        setLoading(false); // Turn off loading state after data is fetched
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Navigate to study material page for a specific course
  const handleCourseClick = (courseId) => {
    navigate(`/study-material/${courseId}`);
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">YourLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/games">Games</Nav.Link>
              <Nav.Link as={Link} to="/test">Test</Nav.Link>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row className="bg-primary text-white py-4 mb-4">
          <Col className="text-center">
            <h1>Courses</h1>
            <p>Explore our variety of courses here.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  {courses.map(course => (
                    <ListGroup.Item key={course.id} className="border-0">
                      <div
                        className="text-decoration-none text-dark"
                        onClick={() => handleCourseClick(course.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <h5>{course.course_name}</h5>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="mt-5 py-3 text-center">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2024 YourCompany | <Link to="/terms">Terms & Conditions</Link></p>
            </Col>
            <Col md={6}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram me-3"></i>
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp me-3"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook me-3"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin me-3"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Courses;
