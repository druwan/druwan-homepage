import { Pool } from 'pg';
require('dotenv').config();

const pool = new Pool({
  host: 'localhost',
  port: parseInt(process.env.POSTGRES_PORT) || 5431,
  user: process.env.POSTGRES_USER,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: process.env.POSTGRES_DBNAME,
  min: 0,
  max: 10,
});

export async function query(text: string, params?: any) {
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
