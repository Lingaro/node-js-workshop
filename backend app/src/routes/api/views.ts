import {Router} from 'express';

const router = Router();

router.route('/')
    .get((req, res) => {
        if (!req.session.views) {
            req.session.views = 0;
        }

        req.session.views++;
        res.send(`You have visited this page ${req.session.views} time(s)`);
    });

export default router;