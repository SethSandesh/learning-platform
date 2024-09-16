const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
const port = 8081;

// Session store configuration
const sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup' // Use your actual database name
});

app.use(cors());
app.use(express.json());
app.use(session({
  key: 'session_cookie_name',
  secret: 'your_session_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});

// Handle connection issues
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Error handler for database disconnection
db.on('error', err => {
  console.error('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    db.connect(); // Reconnect if connection lost
  }
});

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Fetch user account details
// In routes/user.js or server.js
app.get('/account-details', (req, res) => {
    const userId = req.headers['user-id'];
    if (!userId) {
      return res.status(400).send('User ID is required');
    }
    
    const query = 'SELECT name, email, password FROM login WHERE id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching account details' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(results[0]); // Send back user details
    });
  });

  app.put('/update-password', (req, res) => {
    const userId = req.headers['user-id'];
    const { newPassword } = req.body;
  
    if (!userId || !newPassword) {
      return res.status(400).json({ error: 'User ID and new password are required' });
    }
  
    const query = 'UPDATE login SET password = ? WHERE id = ?';
    db.query(query, [newPassword, userId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating password' });
      }
      res.json({ success: 'Password updated successfully' });
    });
  });
  

  app.delete('/delete-account', (req, res) => {
    const userId = req.headers['user-id'];
  
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
  
    const query = 'DELETE FROM login WHERE id = ?';
    db.query(query, [userId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting account' });
      }
      res.json({ success: 'Account deleted successfully' });
    });
  });
  
  

// Get all courses
app.get('/api/courses', (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Get study material for a course
app.get('/api/courses/:id/study-material', (req, res) => {
  const courseId = req.params.id;
  const sql = 'SELECT * FROM study_material WHERE course_id = ?';
  db.query(sql, [courseId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Signup user
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Ensure the password is strong
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password should be at least 8 characters long' });
  }

  const sql = 'INSERT INTO login (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data', details: err });
    }
    res.status(201).json({ message: 'User registered successfully', data: result });
  });
});

// Login user
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM login WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Error querying the database', details: err });
    }

    if (results.length > 0) {
      const user = results[0];

      // Compare the provided password with the stored password
      if (password === user.password) {
        req.session.userId = user.id; // Set user ID in session
        res.json({ success: true, userId: user.id }); // Send success response
      } else {
        res.status(401).json({ error: 'Incorrect password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
