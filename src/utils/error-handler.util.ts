import express from 'express';

export function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (err.status && err.status < 500) {
    res.status(err.status).json({error: err.message});
  } else {
    console.error(err.stack || err);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
