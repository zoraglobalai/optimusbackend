import { AppDataSource } from '../../config/data-source.js';
import { User, UserRole } from '../../entities/User.entity.js';
import { plainToInstance } from 'class-transformer';
import {
  SignUpDTO,
  LoginDTO,
  UserResponseDTO,
  AuthResponseDTO,
} from './auth.dto.js';
import { hashPassword, comparePasswords } from '../../utils/hash.js';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../../utils/jwt.js';

export class AuthService {
  private userRepository = AppDataSource.getRepository(User);

  async signup(signupData: SignUpDTO): Promise<AuthResponseDTO> {
    // Check if user already exists
    const existingUser = await this.userRepository.findOne({
      where: { email: signupData.email },
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await hashPassword(signupData.password);

    // Create user
    const user = this.userRepository.create({
      name: signupData.name,
      email: signupData.email,
      password: hashedPassword,
      role: UserRole.USER,
    });

    const savedUser = await this.userRepository.save(user);

    // Generate tokens
    const tokenPayload = {
      userId: savedUser.id,
      email: savedUser.email,
      role: savedUser.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Return response
    const userResponse = plainToInstance(UserResponseDTO, savedUser);
    return {
      user: userResponse,
      accessToken,
      refreshToken,
    };
  }

  async login(loginData: LoginDTO): Promise<AuthResponseDTO> {
    // Find user
    const user = await this.userRepository.findOne({
      where: { email: loginData.email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await comparePasswords(loginData.password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    // Return response
    const userResponse = plainToInstance(UserResponseDTO, user);
    return {
      user: userResponse,
      accessToken,
      refreshToken,
    };
  }

  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string }> {
    try {
      // Verify refresh token
      const payload = verifyRefreshToken(refreshToken);

      // Get user
      const user = await this.userRepository.findOne({
        where: { id: payload.userId },
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Generate new access token
      const tokenPayload = {
        userId: user.id,
        email: user.email,
        role: user.role,
      };

      const newAccessToken = generateAccessToken(tokenPayload);
      return { accessToken: newAccessToken };
    } catch (error) {
      throw new Error('Failed to refresh token');
    }
  }

  async logout(_userId: string): Promise<void> {
    // No cache layer configured; nothing to revoke server-side
    return Promise.resolve();
  }

  async getUserById(userId: string): Promise<UserResponseDTO> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return plainToInstance(UserResponseDTO, user);
  }
}
