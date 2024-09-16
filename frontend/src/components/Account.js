import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import './Account.css';

function Account({ onLogout }) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '' // Set password as an empty string initially
  });
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch user details on component mount
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get('http://localhost:8081/account-details', { headers: { 'user-id': userId } })
        .then(res => setUserDetails(res.data)) // Set the actual password from the response
        .catch(err => console.error('Error fetching account details:', err));
    }
  }, []);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.put('http://localhost:8081/update-password', { newPassword }, { headers: { 'user-id': userId } })
        .then(res => {
          setSuccess('Password updated successfully');
          setError('');
        })
        .catch(err => setError('Error updating password'));
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleDeleteAccount = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.delete('http://localhost:8081/delete-account', { headers: { 'user-id': userId } })
        .then(() => {
          onLogout(); // Log the user out after deletion
          localStorage.removeItem('userId');
          window.location.href = '/signup'; // Redirect to signup page
        })
        .catch(err => setError('Error deleting account'));
    }
  };

  const handleLogout = () => {
    onLogout();
    localStorage.removeItem('userId');
    window.location.href = '/'; // Redirect to login page after logout
  };

  return (
    <div className="account-page">
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="account-card">
            <Card.Body>
              <h3 className="text-center">Account Details</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} readOnly />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={userDetails.email} readOnly />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  {/* Display the actual password if showPassword is true */}
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    value={showPassword ? userDetails.password : '********'}
                    readOnly
                  />
                  <Button variant="link" onClick={toggleShowPassword}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </Button>
                  <Button variant="link" onClick={() => setShowPassword(true)}>
                    Change Password
                  </Button>
                </Form.Group>

                {/* Password change fields */}
                {showPassword && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Group>
                  </>
                )}

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <Button variant="primary" onClick={handlePasswordChange} className="w-100 mb-3">
                  Update Password
                </Button>

                <Button variant="danger" onClick={() => setShowDeleteModal(true)} className="w-100 mb-3">
                  Delete Account
                </Button>

                <Button variant="secondary" onClick={handleLogout} className="w-100">
                  Logout
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
}

export default Account;
