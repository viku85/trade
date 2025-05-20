import {successResponse, errorResponse} from './response.util'; // Adjust the import path if necessary

describe('Response Utility Functions', () => {
  describe('successResponse', () => {
    it('should return a success response object with data', () => {
      const data = {
        message: 'Operation successful',
        items: [1, 2, 3],
      };
      const expectedResponse = {
        success: true,
        message: 'Success',
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with empty data', () => {
      const data = {};
      const expectedResponse = {
        success: true,
        message: 'Success',
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with null data', () => {
      const data = null;
      const expectedResponse = {
        success: true,
        message: 'Success',
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });

    it('should return a success response object with undefined data', () => {
      const data = undefined;
      const expectedResponse = {
        success: true,
        message: 'Success',
        data: data,
      };
      expect(successResponse(data)).toEqual(expectedResponse);
    });
  });

  describe('errorResponse', () => {
    it('should return an error response object with a message', () => {
      const message = 'Something went wrong';
      const expectedResponse = {
        success: false,
        code: 400,
        message: message,
      };
      expect(errorResponse(message)).toEqual(expectedResponse);
    });

    it('should return an error response object with an empty message', () => {
      const message = '';
      const expectedResponse = {
        success: false,
        code: 400,
        message: message,
      };
      expect(errorResponse(message)).toEqual(expectedResponse);
    });
  });
});
