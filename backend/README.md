# Optimus Backend - Production-Ready Authentication System

A secure, scalable, and enterprise-grade authentication system built with Express.js, PostgreSQL, Redis, and TypeScript.

## 📋 Features

- ✅ User Registration & Login with secure password hashing
- ✅ JWT-based authentication (Access + Refresh tokens)
- ✅ Refresh token rotation with Redis storage
- ✅ Role-based authorization (Admin, User)
- ✅ Protected endpoints with middleware
- ✅ Rate limiting on auth endpoints
- ✅ Security headers with Helmet
- ✅ CORS configuration
- ✅ Input validation with class-validator
- ✅ Centralized error handling
- ✅ Database synchronization utility
- ✅ Graceful shutdown handling
- ✅ Comprehensive logging

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL 12+
- Redis 6+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Setup PostgreSQL**
   ```bash
   createdb optimus_auth
   # or use your preferred PostgreSQL client
   ```

3. **Setup Redis**
   ```bash
   # Make sure Redis is running on localhost:6379
   # or configure the REDIS_HOST and REDIS_PORT in .env
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your settings:
   ```env
   NODE_ENV=development
   PORT=3001

   # Database
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=optimus_auth

   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=

   # JWT Secrets (CHANGE THESE IN PRODUCTION!)
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRY=15m
   REFRESH_TOKEN_SECRET=your-super-secret-refresh-key-change-in-production
   REFRESH_TOKEN_EXPIRY=7d

   # Frontend URL for CORS
   FRONTEND_URL=http://localhost:5173

   # Logging
   LOG_LEVEL=debug
   ```

5. **Sync database schema**
   ```bash
   npm run database:sync
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

   Server will be available at `http://localhost:3001`

## 📚 API Endpoints

### Authentication Routes

#### Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    "accessToken": "jwt-token",
    "refreshToken": "refresh-token"
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (200):** Same as Sign Up

#### Refresh Access Token
```http
POST /api/auth/refresh
Content-Type: application/json
Cookie: refreshToken=...

{
  "refreshToken": "refresh-token"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "new-jwt-token"
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer {accessToken}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer {accessToken}
```

**Response (200):**
```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "USER",
    "createdAt": "2024-01-01T00:00:00Z"
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### Protected Routes

#### User Profile
```http
GET /api/user/profile
Authorization: Bearer {accessToken}
```

#### Admin Dashboard (Admin Only)
```http
GET /api/admin/dashboard
Authorization: Bearer {accessToken}
```

## 🔐 Security Features

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (@$!%*?&)

### Token Strategy
- **Access Token:** 15 minutes expiry (JWT)
- **Refresh Token:** 7 days expiry (HttpOnly cookie + Redis)
- Token rotation on refresh
- Refresh token hash stored in Redis
- Multiple sessions per user supported

### Security Headers
- Helmet.js for HTTP security headers
- CORS properly configured
- HttpOnly cookies for refresh tokens
- Secure flag for production
- SameSite attribute set to strict

### Rate Limiting
- Auth endpoints: 5 requests per 15 minutes
- Prevents brute force attacks

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── data-source.ts        # TypeORM database config
│   │   ├── redis.ts               # Redis client config
│   │   └── env.ts                 # Environment variables
│   │
│   ├── modules/
│   │   └── auth/
│   │       ├── auth.controller.ts # Request handlers
│   │       ├── auth.service.ts    # Business logic
│   │       ├── auth.routes.ts     # API routes
│   │       └── auth.dto.ts        # Data transfer objects
│   │
│   ├── entities/
│   │   └── User.entity.ts         # User database model
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts     # JWT verification
│   │   ├── role.middleware.ts     # Role authorization
│   │   ├── error.middleware.ts    # Error handling
│   │   └── cors.middleware.ts     # CORS handling
│   │
│   ├── utils/
│   │   ├── jwt.ts                 # JWT utilities
│   │   ├── hash.ts                # Password hashing
│   │   ├── response.ts            # API responses
│   │   └── sync-database.ts       # DB sync utility
│   │
│   ├── app.ts                      # Express application setup
│   └── server.ts                   # Server entry point
│
├── .env.example                    # Environment template
├── .eslintrc.json                  # ESLint config
├── .prettierrc.json                # Prettier config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
└── README.md                        # This file
```

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start development server with watch mode

# Building
npm run build            # Compile TypeScript to JavaScript

# Running Production Build
npm start                # Start compiled server

# Linting & Formatting
npm run lint             # Check code quality
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier

# Type Checking
npm run typecheck        # Check TypeScript types

# Database
npm run database:migrate # Run TypeORM migrations
npm run database:sync    # Synchronize database schema
```

## 🔄 User Authentication Flow

1. **Signup/Login**
   - User submits credentials
   - Server validates and creates/verifies user
   - Returns access token (JWT) + refresh token (HttpOnly cookie)

2. **Authenticated Requests**
   - Frontend sends access token in `Authorization: Bearer {token}` header
   - Auth middleware verifies JWT
   - Request proceeds if valid

3. **Token Refresh**
   - When access token expires (401 response)
   - Frontend automatically sends refresh token
   - Server validates refresh token and issues new access token
   - Original request is retried

4. **Logout**
   - Frontend sends logout request
   - Server invalidates refresh tokens
   - Frontend clears tokens

## 🧪 Testing the API

### Using cURL

```bash
# Sign up
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'

# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'

# Get user profile
curl -X GET http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer {accessToken}"

# Logout
curl -X POST http://localhost:3001/api/auth/logout \
  -H "Authorization: Bearer {accessToken}"
```

### Using Postman

1. Import the API endpoints
2. Set `{{baseUrl}}` to `http://localhost:3001`
3. Use the tokens from signup/login in Authorization headers

## 🐛 Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD` in `.env`
- Verify database exists: `psql -l | grep optimus_auth`

### Redis Connection Error
- Ensure Redis is running: `redis-cli ping`
- Check `REDIS_HOST` and `REDIS_PORT` in `.env`

### Port Already in Use
- Change `PORT` in `.env`
- Or kill the process: `lsof -ti:3001 | xargs kill -9`

### JWT Errors
- Regenerate `JWT_SECRET` and `REFRESH_TOKEN_SECRET`
- Clear browser cookies and local storage
- Re-login to get new tokens

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Redis Documentation](https://redis.io/)
- [JWT.io](https://jwt.io/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## 📄 License

MIT License - See LICENSE file for details

## ✅ Production Checklist

Before deploying to production:

- [ ] Change `JWT_SECRET` and `REFRESH_TOKEN_SECRET` to strong values
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS
- [ ] Set secure database credentials
- [ ] Configure CORS properly with frontend domain
- [ ] Set up proper logging
- [ ] Enable database backups
- [ ] Configure Redis persistence
- [ ] Set up monitoring and alerts
- [ ] Use environment-specific configuration
- [ ] Enable rate limiting on all endpoints
- [ ] Set up SSL certificates
- [ ] Configure CDN if needed
- [ ] Set up automated testing
- [ ] Review security headers
- [ ] Audit all dependencies for vulnerabilities

---

Built with ❤️ for scalable authentication systems
