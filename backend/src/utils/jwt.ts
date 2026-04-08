import jwt from 'jsonwebtoken';
import env from '../config/env.js';

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  type: 'access' | 'refresh';
}

export const generateAccessToken = (payload: Omit<JwtPayload, 'type'>): string => {
  return jwt.sign(
    {
      ...payload,
      type: 'access',
    },
    env.jwt.secret,
    {
      expiresIn: env.jwt.expiry,
      issuer: 'optimus-auth',
    }
  );
};

export const generateRefreshToken = (payload: Omit<JwtPayload, 'type'>): string => {
  return jwt.sign(
    {
      ...payload,
      type: 'refresh',
    },
    env.refresh_token.secret,
    {
      expiresIn: env.refresh_token.expiry,
      issuer: 'optimus-auth',
    }
  );
};

export const verifyAccessToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    return decoded as JwtPayload;
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

export const verifyRefreshToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, env.refresh_token.secret);
    return decoded as JwtPayload;
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.decode(token);
    return decoded as JwtPayload | null;
  } catch (error) {
    return null;
  }
};
