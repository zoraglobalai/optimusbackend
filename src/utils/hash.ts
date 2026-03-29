import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    throw new Error('Failed to hash password');
  }
};

export const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw new Error('Failed to compare passwords');
  }
};

export const hashRefreshToken = async (token: string): Promise<string> => {
  try {
    return await bcrypt.hash(token, 8);
  } catch (error) {
    throw new Error('Failed to hash refresh token');
  }
};

export const verifyRefreshTokenHash = async (
  token: string,
  hash: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(token, hash);
  } catch (error) {
    throw new Error('Failed to verify refresh token hash');
  }
};
