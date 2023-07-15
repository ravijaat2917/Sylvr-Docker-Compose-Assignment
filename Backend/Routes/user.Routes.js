import express from 'express';
import formidable from 'express-formidable';
import { getSingleStudentdetails, loginController, registerController, updateController } from '../Controllers/userController.js';

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/update/:id',formidable(), updateController);

router.post('/details', getSingleStudentdetails);

export default router;