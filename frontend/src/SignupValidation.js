export const validateEmail = (email) => {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Password validation criteria: at least 8 characters
  return password.length >= 8;
};

export const validateName = (name) => {
  // Name validation: non-empty
  return name.trim().length > 0;
};

export const validateSignupForm = (values) => {
  let errors = {};
  
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!validateName(values.name)) {
    errors.name = "Invalid name";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email address";
  }
  
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!validatePassword(values.password)) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};
