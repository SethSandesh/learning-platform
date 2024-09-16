export const validateEmail = (email) => {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Password validation criteria: at least 6 characters
  return password.length >= 6;
};

export const validateLoginForm = (values) => {
  let errors = {};
  
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address";
  }
  
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!validatePassword(values.password)) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};
