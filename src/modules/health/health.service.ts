export const getHealthStatus = (): { status: string; message: string } => {
  return { status: "UP", message: "Service is running" };
};
