import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; // Import your custom CSS file

const Home = () => {
  const navigate = useNavigate();

  // Functions to programmatically navigate to different pages
  const goToCourses = () => {
    navigate('/courses');
  };

  const goToGames = () => {
    navigate('/games');
  };

  const goToTest = () => {
    navigate('/test');
  };

  const goToAccount = () => {
    navigate('/account');
  };

  return (
    <div className="MainBody">
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="">YourLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/games">Games</Nav.Link>
              <Nav.Link as={Link} to="/test">Test</Nav.Link>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Section */}
      <div className="hero-section text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="welcome-message">
                <h1>Welcome to Our Learning Platform</h1>
                <p>Explore our courses, play educational games, and test your knowledge.</p>

                <Button variant="primary" onClick={goToCourses} className="mt-3">
                  Start Learning
                </Button>

                <div className="mt-4">
                  <Button variant="secondary" onClick={goToGames} className="me-2">Go to Games</Button>
                  <Button variant="secondary" onClick={goToTest} className="me-2">Go to Test</Button>
                  <Button variant="secondary" onClick={goToAccount} className="me-2">Go to Account</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Horizontal Scrollable Blog Section */}
      <Container>
        <h2 className="text-center mt-5">Latest Blogs</h2>
        <Carousel className="mt-4 blog-carousel">
          <Carousel.Item>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Blog 1</Card.Title>
                <Card.Text>Introduction to JavaScript programming.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Blog 2</Card.Title>
                <Card.Text>Why learn Python?</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Blog 3</Card.Title>
                <Card.Text>HTML & CSS: Basics of Web Design.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Blog 4</Card.Title>
                <Card.Text>Advanced JavaScript Concepts.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Blog 5</Card.Title>
                <Card.Text>Introduction to Backend Development with Node.js.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
        {/* Read More Blogs Button */}
        <div className="text-center mt-4">
          <Button variant="link" as={Link} to="/blog"><h4>Read More Blogs</h4></Button>
        </div>

        {/* Programming Languages Information Section */}
        <div className="text-center mt-5 programming-info">
          <h3>Why Learn Programming?</h3>
          <p>Programming is essential for creating software, websites, and applications. Start learning Python, JavaScript, HTML, CSS, and more with our platform.</p>
        </div>
      </Container>

      {/* Footer Section */}
      <footer className="mt-5 py-3 text-center">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2024 YourCompany | <Link to="/terms">Terms & Conditions</Link></p>
            </Col>
            <Col md={6}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram me-3"></i></a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp me-3"></i></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook me-3"></i></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin me-3"></i></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
