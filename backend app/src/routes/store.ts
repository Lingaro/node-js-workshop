import * as session from 'express-session';
const RedisStore = require('connect-redis')(session);
import redisOptions from './redisOptions';
 
export default function attachStore(app) {
    app.use(session({
        store: new RedisStore(redisOptions),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));
}