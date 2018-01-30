import {Router} from 'express';
import usersRouter from './users';
import usersDbRouter from './usersdb';
import viewsRouter from './views';
import appDataRouter from './appData';

const router = Router();

router.use('/users', usersRouter);
router.use('/users-db', usersDbRouter);
router.use('/views', viewsRouter);
router.use('/app-data', appDataRouter);

export default router;