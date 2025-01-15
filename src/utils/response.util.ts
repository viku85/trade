export const successResponse = (data: any, message = "Success") => ({
  success: true,
  message,
  data,
});

export const errorResponse = (message: string, code = 400) => ({
  success: false,
  code,
  message,
});
