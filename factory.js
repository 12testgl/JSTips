class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

class NotFoundError extends CustomError {
  constructor(resource) {
    super(`Resource "${resource}" not found`);
    this.name = "NotFoundError";
  }
}

class ValidationError extends CustomError {
  constructor(field, message) {
    super(`Validation error for field "${field}": ${message}`);
    this.name = "ValidationError";
  }
}

class TranssetesError extends CustomError {
  constructor(field, message) {
    super(`Validation error for field "${field}": ${message}`);
    this.name = "ValidationError";
  }
}

class ErrorFactory {
  create(type, ...args) {
    switch (type) {
      case "not_found":
        return new NotFoundError(...args);
      case "validation":
        return new ValidationError(...args);
      default:
        throw new Error(`Unknown error type: ${type}`);
    }
  }
}

try {
  // Simulate a not found error
  const errorFactory = new ErrorFactory();
  throw errorFactory.create("not_found", "User");

  // Simulate a validation error
  // throw errorFactory.create('validation', 'email', 'Invalid email format');
} catch (error) {
  console.error(`Error: ${error.message}`);
}
