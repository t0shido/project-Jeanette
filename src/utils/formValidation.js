/**
 * Form validation utility functions
 */

// Email validation using regex
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Name validation - at least 2 characters, no numbers or special chars except spaces, hyphens
export const isValidName = (name) => {
  if (!name || name.trim().length < 2) return false;
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/;
  return nameRegex.test(name);
};

// Message validation - at least 10 characters
export const isValidMessage = (message) => {
  return message && message.trim().length >= 10;
};

// Service validation - must be selected
export const isValidService = (service) => {
  return service && service.trim() !== '';
};

// Validate all form fields
export const validateForm = (formData) => {
  const errors = {};
  
  if (!isValidName(formData.name)) {
    errors.name = 'Please enter a valid name (at least 2 characters)';
  }
  
  if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!isValidService(formData.service)) {
    errors.service = 'Please select a service';
  }
  
  if (!isValidMessage(formData.message)) {
    errors.message = 'Please enter a message (at least 10 characters)';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
