import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export const processImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { file } = req;
    if (!file) {
      throw new Error('No file uploaded');
    }

    const outputPath = path.join(__dirname, '../../images/processed', file.filename + '_processed.jpg');

    await sharp(file.path)
      .resize(300, 300)
      .toFormat('jpeg')
      .toFile(outputPath);

    res.json({ message: 'Image processed successfully', path: outputPath });
  } catch (error) {
    next(error);
  }
};
