import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import winston from 'winston';
import path from 'path';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const logFile = path.join(process.cwd(), 'logs', 'markdown-sync.log');

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message, ...meta }) =>
        `[${timestamp}] ${level.toUpperCase()} ${message} ${
          Object.keys(meta).length ? JSON.stringify(meta) : ''
        }`,
    ),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFile, level: 'info' }),
  ],
});
