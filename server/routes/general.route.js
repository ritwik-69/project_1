import express from 'express';

const router = express.Router();

router.get('/user/:id',getUser)
export default router;