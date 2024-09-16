import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Games.css'; // Your custom CSS for Game component

// List of puzzles
const allLevels = [
  {
    question: `
      let a = 10;
      let b = 5;
      let result = a + b;
      result = result * 2;
      // What is the value of 'result'?
    `,
    correctAnswer: '30',
  },
  {
    question: `
      let arr = [1, 2, 3];
      arr.push(4);
      arr.pop();
      // What is the length of 'arr' now?
    `,
    correctAnswer: '3',
  },
  {
    question: `
      let obj = { x: 10, y: 20 };
      obj.z = 30;
      delete obj.x;
      // What properties does 'obj' have now?
    `,
    correctAnswer: '{"y":20,"z":30}',
  },
  {
    question: `
      let str = "hello";
      let result = str[0] + str[4];
      // What is the value of 'result'?
    `,
    correctAnswer: 'ho',
  },
  {
    question: `
      let n = 5;
      let result = n ** 2;
      // What is the value of 'result'?
    `,
    correctAnswer: '25',
  },
  {
    question: `
      let isEven = (n) => n % 2 === 0;
      let result = isEven(4);
      // What is the value of 'result'?
    `,
    correctAnswer: 'true',
  },
  {
    question: `
      let obj = { a: 1, b: 2 };
      let result = 'b' in obj;
      // What is the value of 'result'?
    `,
    correctAnswer: 'true',
  },
  {
    question: `
      let num = 0;
      num++;
      num++;
      num--;
      // What is the value of 'num'?
    `,
    correctAnswer: '1',
  },
  {
    question: `
      let str = "abcdef";
      let result = str.substring(2, 4);
      // What is the value of 'result'?
    `,
    correctAnswer: 'cd',
  },
  {
    question: `
      const obj = { x: 5, y: 10 };
      const result = obj.hasOwnProperty('z');
      // What is the value of 'result'?
    `,
    correctAnswer: 'false',
  },
];

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [shuffledLevels, setShuffledLevels] = useState(shuffleArray([...allLevels]));
  const [currentLevel, setCurrentLevel] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);

  const navigate = useNavigate();
  const currentPuzzle = shuffledLevels[currentLevel];

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timeLeft]);

  // Display the number of attempts left as hearts
  const renderLives = () => '❤️'.repeat(attempts);

  // Reset the current level
  const resetLevel = () => {
    setAnswer('');
    setAttempts(3);
    setTimeLeft(30);
  };

  // Reset the entire game
  const resetGame = () => {
    setShuffledLevels(shuffleArray([...allLevels]));
    setCurrentLevel(0);
    setScore(0);
    setAttempts(3);
    setTimeLeft(30);
    setAnswer('');
    setFeedback('');
  };

  // Function to check the answer
  const checkAnswer = () => {
    if (answer === currentPuzzle.correctAnswer) {
      setFeedback('Correct! 🎉');
      setScore(score + 5);
      if (currentLevel < shuffledLevels.length - 1) {
        setCurrentLevel(currentLevel + 1);
      } else {
        setFeedback('🎉 Congratulations! You completed all levels!');
        // Navigate to home after game completion
        setTimeout(() => {
          navigate('/home');  // Redirect after completing the game
        }, 3000); // Wait for 3 seconds
      }
      resetLevel();
    } else {
      setAttempts(attempts - 1);
      setScore(score - 2);
      setFeedback('Incorrect. Try again!');
      if (attempts === 1) {
        setFeedback('Game Over! 😢');
        // Reset the game after losing all attempts
        setTimeout(() => {
          resetGame();
          navigate('/games');  // Navigate back to games page or home
        }, 3000); // Wait for 3 seconds before restarting
      }
    }
  };

  return (
    <div>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">YourLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/test">Test</Nav.Link>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Game Content */}
      <div style={styles.container}>
        <h1>JS Puzzle Adventure</h1>
        <p>Level {currentLevel + 1}</p>

        {currentLevel < shuffledLevels.length && timeLeft > 0 ? (
          <div>
            <pre style={styles.codeBlock}>{currentPuzzle.question}</pre>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer"
              style={styles.input}
            />
            <button onClick={checkAnswer} style={styles.button}>
              Submit Answer
            </button>
          </div>
        ) : currentLevel >= shuffledLevels.length ? (
          <div>
            <p style={styles.feedback}>You've completed the game! 🎉</p>
            <p style={styles.stats}>Your final score is: {score}</p>
            <button onClick={resetGame} style={styles.button}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <p style={styles.feedback}>Time's up! 😢</p>
            <button onClick={resetGame} style={styles.button}>
              Restart Game
            </button>
          </div>
        )}

        <p
          style={{
            ...styles.feedback,
            ...(feedback === 'Correct! 🎉' ? styles.correctFeedback : styles.incorrectFeedback),
          }}
        >
          {feedback}
        </p>

        <div style={styles.stats}>
          <p>Score: {score}</p>
          <p>Time left: {timeLeft} seconds</p>
          <p>Attempts left: {renderLives()}</p>
        </div>
      </div>

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

// CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("/path/to/your/background.jpg")',
    backgroundSize: 'cover',
    color: '#000',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  },
  codeBlock: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '10px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '600px',
    fontFamily: 'monospace',
    color: '#00FF00',
  },
  input: {
    marginTop: '20px',
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    fontSize: '18px',
  },
  correctFeedback: {
    color: 'green',
  },
  incorrectFeedback: {
    color: 'red',
  },
  stats: {
    marginTop: '20px',
  },
};

export default Game;
