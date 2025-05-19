import {
  successResponse,
  errorResponse,
  SuccessResponse,
  ErrorResponse,
} from './response.util'; // Adjust the import path if necessary

describe('Response Utility Functions', () => {
  describe('successResponse', () => {
    it('should return a success response object with data', () => {
      const data = {
        message: 'Operation successful',
        items: [1, 2, 3]
      };
      const expectedResponse: SuccessResponse < typeof data > = {
        success: true,
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with empty data', () => {
      const data = {};
      const expectedResponse: SuccessResponse < typeof data > = {
        success: true,
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with null data', () => {
      const data = null;
      const expectedResponse: SuccessResponse < typeof data > = {
        success: true,
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with undefined data', () => {
      const data = undefined;
      const expectedResponse: SuccessResponse < typeof data > = {
        success: true,
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });
  });

  describe('errorResponse', () => {
    it('should return an error response object with a message', () => {
      const message = 'Something went wrong';
      const expectedResponse: ErrorResponse = {
        success: false,
        error: message,
      };
      expect(errorResponse(message)).toEqual(expectedResponse);
    });

    it('should return an error response object with an empty message', () => {
      const message = '';
      const expectedResponse: ErrorResponse = {
        success: false,
        error: message,
      };
      expect(errorResponse(message)).toEqual(expectedResponse);
    });

    it('should return an error response object with a null message', () => {
      const message = null;
      const expectedResponse: ErrorResponse = {
        success: false,
        error: message as any, // Type assertion because null is not strictly string
      };
      expect(errorResponse(message as any)).toEqual(expectedResponse);
    });

    it('should return an error response object with an undefined message', () => {
      const message = undefined;
      const expectedResponse: ErrorResponse = {
        success: false,
        error: message as any, // Type assertion because undefined is not strictly string
      };
      expect(errorResponse(message as any)).toEqual(expectedResponse);
    });
  });
});