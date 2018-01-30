import {Router} from 'express';
import apiRouter from './api/index';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello there!');
});

router.use('/api', (req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
}, apiRouter);

export default router;