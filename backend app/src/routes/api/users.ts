import * as express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        const users = [
            {username: 'kowalskij', firstName: 'Jan', lastName: 'Kowalski'},
            {username: 'nowakk', firstName: 'Karol', lastName: 'Nowak'}
        ];

        res.send(users);
    });

export default router;