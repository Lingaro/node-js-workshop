import { Pool } from 'pg';
import pgConnect from './pgConnect';

const pool = new Pool(pgConnect);

export default pool;