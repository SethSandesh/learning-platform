import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Spinner, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './StudyMaterial.css'; // Import your custom CSS file

const StudyMaterial = () => {
  const { id } = useParams(); // Get the course ID from URL parameters
  const [studyMaterial, setStudyMaterial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTitleId, setSelectedTitleId] = useState(null); // State for selected title
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8081/api/courses/${id}/study-material`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudyMaterial(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching study material:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleTitleClick = (titleId) => {
    // Toggle between showing and hiding content for the clicked title
    setSelectedTitleId(selectedTitleId === titleId ? null : titleId);
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
              <Nav.Link onClick={() => navigate('/courses')}>Back to Courses</Nav.Link>
              <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/games')}>Games</Nav.Link>
              <Nav.Link onClick={() => navigate('/test')}>Test</Nav.Link>
              <Nav.Link onClick={() => navigate('/account')}>Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="bg-primary text-white py-4 mb-4">
          <Col className="text-center">
            <h1>Study Material</h1>
          </Col>
        </Row>
        <Row>
          {studyMaterial.length > 0 ? (
            studyMaterial.map((material) => (
              <Col md={4} key={material.id} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title 
                      onClick={() => handleTitleClick(material.id)} 
                      style={{ cursor: 'pointer' }}
                    >
                      {material.title}
                    </Card.Title>
                    {selectedTitleId === material.id && (
                      <Card.Text>{material.content}</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <p>No study material available for this course.</p>
            </Col>
          )}
        </Row>
      </Container>

      <footer className="mt-5 py-3 text-center">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2024 YourCompany | <a href="/terms">Terms & Conditions</a></p>
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

export default StudyMaterial;
