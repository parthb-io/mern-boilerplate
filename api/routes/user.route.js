import express from 'express';
import {test}  from '../controllers/user.controller.js';
const router = express.Router();

// homepage default route
router.get('/', test);

export default router;
