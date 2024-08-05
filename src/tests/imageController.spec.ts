import { processImage } from '../controllers/imageController';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

describe('Image Processing', () => {
  it('should process an image successfully', async () => {
    const req = {
      file: {
        path: path.join(__dirname, 'sample.jpg'),
        filename: 'sample'
      }
    } as Request;

    const res = {
      json: jasmine.createSpy('json')
    } as unknown as Response;

    const next = jasmine.createSpy('next');

    await processImage(req, res, next);

    expect(res.json).toHaveBeenCalledWith({
      message: 'Image processed successfully',
      path: jasmine.any(String)
    });
  });

  it('should handle errors when no file is uploaded', async () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = jasmine.createSpy('next');

    await processImage(req, res, next);

    expect(next).toHaveBeenCalledWith(new Error('No file uploaded'));
  });
});
