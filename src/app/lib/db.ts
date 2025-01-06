import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  user: process.env.POSTGRES_USER,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: process.env.POSTGRES_DBNAME,
  min: 0,
  max: 10,
});

export async function query(text: string, params?: undefined) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (error) {
    console.error(`Error executing query: ${error.message}`);
    throw error;
  } finally {
    client.release();
  }
}
