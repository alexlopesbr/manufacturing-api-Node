// tests/controllers/companyController.test.js

const { getAllCompanies } = require('../controllers/companyController');
const companyModel = require('../models/Company');

// Mocking the companyModel for testing
jest.mock('../models/Company', () => ({
  getAllCompanies: jest.fn(),
}));

describe('getAllCompanies controller', () => {
  let originalConsoleError;

  beforeAll(() => {
    // Save the original console.error function
    originalConsoleError = console.error;
    // Mock console.error to suppress output during tests
    console.error = jest.fn();
  });

  afterAll(() => {
    // Restore the original console.error function after all tests
    console.error = originalConsoleError;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return all companies when successful', async () => {
    // Arrange
    const mockCompanies = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];
    companyModel.getAllCompanies.mockResolvedValue(mockCompanies);
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Act
    await getAllCompanies(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCompanies);
  });

  test('should handle errors and respond with a 500 status code', async () => {
    // Arrange
    const errorMessage = 'An error occurred';
    companyModel.getAllCompanies.mockRejectedValue(new Error(errorMessage));
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Act
    await getAllCompanies(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    // You can also add more specific assertions based on your error handling logic

    // Check that console.error was called with the expected error message
    expect(console.error).toHaveBeenCalledWith('Error getting companies:', errorMessage);
  });
});
