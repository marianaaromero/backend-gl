# 🌊 Swimming API Documentation
## 🏊 Introduction
The Swimming API provides access to a range of data related to swimming training. It allows users to manage training routines, strokes and training tips.

## 🔐 Authentication
The API uses JWT-based authentication. Tokens must be included in the Authorization header of each request, formatted as Bearer <token>.

## 🌐 Base URL
http://localhost:3000/api

## 📂 Endpoints
### **👤 Users**
**POST /register**

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

**POST /login**

Log in a user if the credentials are valid. This also creates a token and refreshToken.
#### **Response:**
```json
{
    "message": "Login successful",
    "token": "...",
    "refreshToken": "..."
}
```

**GET /profile/:id**

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
**GET /routines**

Retrieve a list of all routines.
```json
[{
    "id": 1,
    "title": "Beginner Freestyle Technique",
    "description": "A routine designed to help beginners develop basic freestyle stroke skills.",
    "duration": 30,
    "distance": 1000,
    "details": "Warm-up (200 meters): Easy swim, mix of freestyle and backstroke. Drill Set (300 meters): 4 x 50 meters: Focus on arm technique, swim with one arm at a time. 4 x 25 meters: Catch-up drill, focusing on hand entry and extension. Main Set (400 meters): 4 x 100 meters: Freestyle, breathing every 3 strokes, steady pace. Cool-down (100 meters): Easy swim, focus on smooth strokes and relaxed breathing.",
    "recommendedLevel": "BEGINNER",
    "createdAt": "2024-07-30T01:01:30.285Z",
    "updatedAt": "2024-07-30T01:01:30.285Z"
},
{
...
}
]
```

**POST /routines**

Create a new routine.
#### **Request Body:**
```json
{
    "title": "Advanced Freestyle",
    "description": "Advanced routine to improve speed and endurance in freestyle.",
    "duration": 45,
    "distance": 1500,
    "details": "Warm-up (300 meters): 100 meters freestyle, 100 meters backstroke, 100 meters breaststroke. Main Set (600 meters): 4 x 100 meters: Freestyle at a fast pace.",
    "recommendedLevel": "ADVANCED"
}
```
#### **Response:**
```json
{
    "id": 2,
    "title": "Advanced Freestyle",
    "description": "Advanced routine to improve speed and endurance in freestyle.",
    "duration": 45,
    "distance": 1500,
    "details": "Warm-up (300 meters): 100 meters freestyle, 100 meters backstroke, 100 meters breaststroke. Main Set (600 meters): 4 x 100 meters: Freestyle at a fast pace.",
    "recommendedLevel": "ADVANCED",
    "createdAt": "2024-07-01T00:00:00.000Z",
    "updatedAt": "2024-07-01T00:00:00.000Z"
}, {
message: 'Routine created successfully'
}
```

**GET /routines/:id**

Retrieve details of a specific routine.
#### **Response:**
```json
{
    "id": 1,
    "title": "Basic Freestyle",
    "description": "Routine for beginners to improve freestyle technique.",
    "duration": 30,
    "distance": 1000,
    "details": "Warm-up (200 meters): 100 meters freestyle, 100 meters backstroke. Drill Set (300 meters): 4 x 50 meters: Focus on arm technique. 4 x 25 meters: Catch-up drill, focusing on hand entry.",
    "recommendedLevel": "BEGINNER",
    "createdAt": "2024-07-01T00:00:00.000Z",
    "updatedAt": "2024-07-01T00:00:00.000Z"
}
```

**PATCH /routines/:id**

Update details of a specific routine.
#### **Request Body:**
```json
{
    "title": "Intermediate Freestyle",
    "description": "Intermediate routine to enhance technique and endurance in freestyle.",
    "duration": 35,
    "distance": 1200,
    "details": "Warm-up (200 meters): 100 meters freestyle, 100 meters backstroke. Main Set (600 meters): 4 x 100 meters: Freestyle with bilateral breathing.",
    "recommendedLevel": "INTERMEDIATE"
}
```
#### **Response:**
```json
{
    "id": 1,
    "title": "Intermediate Freestyle",
    "description": "Intermediate routine to enhance technique and endurance in freestyle.",
    "duration": 35,
    "distance": 1200,
    "details": "Warm-up (200 meters): 100 meters freestyle, 100 meters backstroke. Main Set (600 meters): 4 x 100 meters: Freestyle with bilateral breathing.",
    "recommendedLevel": "INTERMEDIATE",
    "createdAt": "2024-07-01T00:00:00.000Z",
    "updatedAt": "2024-07-02T00:00:00.000Z"
}
```

**DELETE /routines/:id**

Delete a specific routine.
#### **Response:**
```json
{
    "message": "Routine deleted successfully."
}
```


### **🏊 Strokes**
**GET /strokes**

Retrieve a list of all strokes.
#### **Response:**
```json
{
    "id": 1,
    "name": "Freestyle",
    "description": "The freestyle stroke, also known as the crawl, is the fastest and most commonly used stroke in competitions. It involves alternating arm movements and a continuous leg kick, with the head submerged and turned for breathing. It is a highly efficient stroke and the preferred choice for long distances."
},{
...
}
```

**GET /strokes/:id**

Retrieve details of a specific stroke.
#### **Response:**
```json
{
    "id": 3,
    "name": "Butterfly",
    "description": "The butterfly stroke is one of the most challenging and technical, characterized by simultaneous arm movements and a strong undulating body motion. The dolphin kick is used in synchronization with the arm movements, and proper breathing technique is essential to maintain rhythm."
}
```

### **💡 Tips**
**GET /tips**

Retrieve a list of all tips.
```json
{
    "id": 1,
    "title": "Stay Hydrated",
    "creator": "Coach Emily",
    "description": "Drink plenty of water before, during, and after swimming to maintain energy levels and muscle function.",
    "url": null,
    "level": "BEGINNER",
    "createdAt": "2024-07-30T01:27:13.670Z",
    "updatedAt": "2024-07-30T01:27:13.670Z"
},{
...
}
```

**POST /tips**

Create a new tip.
#### **Request Body:**
```json
{
    "title": "Stay Hydrated",
    "creator": "Coach Emily",
    "description": "Drink plenty of water before, during, and after swimming to maintain energy levels and muscle function.",
    "level": "BEGINNER",
}
```
#### **Response:**
```json
{
    "id": 1,
    "title": "Stay Hydrated",
    "creator": "Coach Emily",
    "description": "Drink plenty of water before, during, and after swimming to maintain energy levels and muscle function.",
    "url": null,
    "level": "BEGINNER",
    "createdAt": "2024-07-30T01:27:13.670Z",
    "updatedAt": "2024-07-30T01:27:13.670Z"
},{
message: 'Tip created successfully'
}
```

**GET /tips/:id**

Retrieve details of a specific tip.
#### **Response:**
```json
{
    "id": 4,
    "title": "Breathing Technique",
    "creator": "Swim Coach John",
    "description": "Practice bilateral breathing in freestyle to maintain balance and rhythm in the water. Breathe every 3 strokes to improve efficiency.",
    "url": null,
    "level": "BEGINNER",
    "createdAt": "2024-07-30T01:29:13.360Z",
    "updatedAt": "2024-07-30T01:29:13.360Z"
}
```

**PATCH /tips/:id**

Update details of a specific tip.
#### **Request Body:**
```json
{
    "title": "Breathing Technique",
    "creator": "Swim Coach John",
    "description": "Practice bilateral breathing in freestyle to maintain balance and rhythm in the water. Breathe every 3 strokes to improve efficiency.",
    "level": "INTERMEDIATE"
}
```
#### **Response:**
```json
{
    "title": "Breathing Technique",
    "creator": "Swim Coach John",
    "description": "Practice bilateral breathing in freestyle to maintain balance and rhythm in the water. Breathe every 3 strokes to improve efficiency.",
    "level": "INTERMEDIATE"
    "createdAt": "2024-07-01T00:00:00.000Z",
    "updatedAt": "2024-07-02T00:00:00.000Z"
}
```

**DELETE /tips/:id**

Delete a specific tip.
#### **Response:**
```json
{
    "message": "Tip deleted successfully."
}
```

## ❤️ Mark as Favorite
Users can mark routines and tips as their favorites. This functionality allows users to easily find and revisit their preferred routines and tips.

### **Favorite a Routine**
**POST /routine-fav**

Marks a routine as favorite for the logged-in and selected user.

#### **Request Body:**
```json
{
    "userId": 1, 
    "routineId": 1
}
```

**GET /routine-fav**

Retrieve a list of routines marked as favorite by the logged-in user, using the user id as the key on the query params. This also shows the username and email that comes within the id used.

#### **Response:**
```json
{
    "routineId": 1,
    "userId": 1,
    "routine": {
            "title": "Beginner Freestyle Technique"
    },
    "user": {
        "username": "johndoe0",
        "email": "mohndoe@gmail.com"
    }
}, {
...
}
```

### **Favorite a Tip**
**POST /tip-fav**

Marks a tip as favorite for the logged-in and selected user.

#### **Request Body:**
```json
{
    "userId": 1, 
    "tipId": 1
}
```

**GET /tip-fav**

Retrieve a list of tips marked as favorite by the logged-in user, using the user id as the key on the query params. This also shows the username and email that comes within the id used.

#### **Response:**
```json
{
    "tipId": 1,
    "userId": 1,
    "tip": {
            "title": "Stay Hydrated"
    },
    "user": {
        "username": "johndoe0",
        "email": "mohndoe@gmail.com"
    }
}, {
...
}
```

