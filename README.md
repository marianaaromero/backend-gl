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
POST /register

### **🏋️‍♂️ Routines**
GET /routines
Retrieve a list of all routines.

### **🏊 Strokes**


