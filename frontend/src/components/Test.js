import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Test.css';  // Import the custom CSS

const Test = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const tests = {
    JavaScript: [
      { question: "What is a closure in JavaScript?", answer: "A function with its lexical scope." },
      { question: "What is the difference between '==' and '==='?", answer: "'===' checks both value and type." },
      { question: "What is 'this' keyword in JavaScript?", answer: "'this' refers to the object it's called on." },
      { question: "What is the purpose of async/await?", answer: "To handle asynchronous code in a synchronous manner." },
      { question: "What is event bubbling?", answer: "Event propagation from child to parent element." },
      { question: "What is hoisting in JavaScript?", answer: "The default behavior of moving declarations to the top." },
      { question: "What are promises in JavaScript?", answer: "Objects that represent the eventual completion of an async operation." },
      { question: "What is the difference between var, let, and const?", answer: "var is function-scoped, let and const are block-scoped." },
      { question: "What are arrow functions in JavaScript?", answer: "A shorthand syntax for writing functions using '=>'." },
      { question: "What is the event loop?", answer: "The mechanism that handles asynchronous operations." }
    ],
    HTML: [
      { question: "What does HTML stand for?", answer: "HyperText Markup Language." },
      { question: "What is a semantic HTML element?", answer: "Elements that clearly describe their meaning." },
      { question: "What is the use of <meta> tag?", answer: "To provide metadata about the HTML document." },
      { question: "What is the difference between <div> and <span>?", answer: "<div> is block-level, <span> is inline." },
      { question: "How do you create a hyperlink in HTML?", answer: "Using <a> tag with an href attribute." },
      { question: "What is the purpose of the <form> tag?", answer: "To collect user input." },
      { question: "What are the different types of lists in HTML?", answer: "Ordered, unordered, and definition lists." },
      { question: "What is the <head> section in an HTML document?", answer: "Contains metadata and links to resources." },
      { question: "What is the <iframe> tag used for?", answer: "To embed another webpage within the current page." },
      { question: "What is the <canvas> tag used for?", answer: "To draw graphics using JavaScript." }
    ],
    Python: [
      { question: "What is a lambda function in Python?", answer: "An anonymous function." },
      { question: "How do you define a function in Python?", answer: "Using 'def' keyword." },
      { question: "What is list comprehension?", answer: "A concise way to create lists." },
      { question: "What is the difference between list and tuple?", answer: "Lists are mutable, tuples are immutable." },
      { question: "What is the use of 'pass' statement?", answer: "To act as a placeholder." },
      { question: "What are decorators in Python?", answer: "Functions that modify other functions." },
      { question: "What is the difference between 'is' and '==' in Python?", answer: "'is' checks identity, '==' checks equality." },
      { question: "What is the global keyword in Python?", answer: "It allows a variable to be accessed globally." },
      { question: "What is the use of the 'with' statement?", answer: "Simplifies exception handling for file operations." },
      { question: "What are Python's data types?", answer: "Common types include int, float, string, list, tuple, and dict." }
    ]
  };

  const startTest = (testName) => {
    setSelectedTest(testName);
    setAnswers(Array(tests[testName].length).fill(""));
    setSubmitted(false);
    setScore(0);
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const submitTest = () => {
    let correctAnswers = 0;
    tests[selectedTest].forEach((q, index) => {
      if (q.answer.toLowerCase() === answers[index].toLowerCase()) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setSubmitted(true);
  };

  return (
    <div className="test-page">
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="">YourLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/games">Games</Nav.Link>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8} lg={6}>
            <h1>Test Page</h1>
            {!selectedTest && (
              <div>
                <h3>Select a Test</h3>
                {Object.keys(tests).map((testName, index) => (
                  <Button key={index} onClick={() => startTest(testName)}>
                    {testName} Test
                  </Button>
                ))}
              </div>
            )}
            {selectedTest && !submitted && (
              <div>
                <h3>{selectedTest} Test</h3>
                <Form>
                  {tests[selectedTest].map((test, index) => (
                    <Form.Group key={index} className="mb-3">
                      <Form.Label>{index + 1}. {test.question}</Form.Label>
                      <Form.Control
                        type="text"
                        value={answers[index]}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                      />
                    </Form.Group>
                  ))}
                  <Button variant="primary" onClick={submitTest}>Submit</Button>
                </Form>
              </div>
            )}
            {submitted && (
              <div>
                <h3>Results for {selectedTest} Test</h3>
                <ul>
                  {tests[selectedTest].map((test, index) => (
                    <li key={index}>
                      {index + 1}. {test.question} <br />
                      <strong>Your answer:</strong> {answers[index]} <br />
                      {test.answer.toLowerCase() === answers[index].toLowerCase() ? (
                        <span className="correct-answer">Correct!</span>
                      ) : (
                        <span className="wrong-answer">Wrong! Correct answer: {test.answer}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="score">Your Score: {score} / {tests[selectedTest].length}</div>
                <Button onClick={() => setSelectedTest(null)}>Go Back</Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
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

export default Test;
