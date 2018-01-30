import * as express from 'express';
import routes from './routes/root';
// import attachStore from './routes/store';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// attachStore(app);

app.use(routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000.');
});