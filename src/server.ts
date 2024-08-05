import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import imageRoutes from './routes/imageRoutes';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use('/api/images', imageRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
