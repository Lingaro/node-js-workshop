import {Router} from 'express';
import pool from '../../service/db/pool';

const router = Router();

router.route('/')
    .get(async (req, res) => {
        const result = await pool.query('select * from users');
        const data = result.rows;

        res.send(data);
    });

export default router;