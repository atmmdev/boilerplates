import { Request, Response } from 'express';

export const homeController = {
  healthCheck(req: Request, res: Response) {
    return res.status(200).json({
      status: 'ok',
      message: 'API is running successfully!!!🚀',
      timestamp: new Date().toISOString(),
    });
  },

  welcome(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Welcome to the Express + TypeScript API',
      author: 'Anderson',
    });
  },
};
