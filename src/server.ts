require('dotenv').config();

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import path from 'path';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });
  
  app.get('/', (request: Request, response: Response) => {
    return response.json({
      message: 'Hello World',
    });
  });
  
  app.listen(process.env.PORT || 3334, () => console.log('tech-api is running now!'));