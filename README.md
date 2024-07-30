# 🌊 Swimming API Documentation
## 🏊 Introduction
The Swimming API provides access to a range of data related to swimming training. It allows users to manage training routines, strokes and training tips.

## 🔐 Authentication
The API uses JWT-based authentication. Tokens must be included in the Authorization header of each request, formatted as Bearer <token>.

## 🌐 Base URL
http://localhost:3000/api

## 📂 Endpoints
### **👤 Users**
POST /register

Register a new user.
#### **Request Body:**
```json
{
    "username": "newUser",
    "email": "new@example.com",
    "password": "password123",
    "age": 20
}
```
POST /login
Log in a user if the credentials are valid and creates a token and refreshToken.
#### **Response:**
```json
{
    "message": "Login successful",
    "token": "...",
    "refreshToken": "..."
}
```

GET /profile/:id
Retrieve the profile of a specific user.
#### **Response:**
```json
{
    "id": 1,
    "username": "johndoe0",
    "email": "johndoe@gmail.com",
    "password": "$2b$10$IeT6dfdsfO6huY0BQoroI.rXxJu.n9m3xuC/LqrlC",
    "age": 18,
    "createdAt": "2023-07-30T00:37:57.760Z",
    "updatedAt": "2024-07-30T00:37:57.760Z"
}
```

### **🏋️‍♂️ Routines**
GET /routines
Retrieve a list of all routines.

### **🏊 Strokes**


