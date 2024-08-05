import { Router } from 'express';
import multer from 'multer';
import { processImage } from '../controllers/imageController';


const router = Router();
const upload = multer({ dest: 'images/' });

router.post('/process', upload.single('image'), processImage);

export default router;
