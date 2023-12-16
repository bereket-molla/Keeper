# Note Keeper Application

Note Keeper is a full-stack web application for creating and managing personal notes. This project is split into two main parts: the frontend, built with React, and the backend, which is a RESTful API built with Node.js, Express, and MongoDB.

## Features

- Create, view, and delete notes
- Simple and intuitive user interface
- Persistent storage of notes

## Technologies Used

### Frontend

- React
- HTML/CSS
- Deployed on Vercel

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Deployed on Railway

## API Endpoints

The backend server exposes several RESTful endpoints:

- `POST /api/notes/`: Create a new note with a title and body.
- `GET /api/notes/`: Retrieve all notes.
- `DELETE /api/notes/:id`: Delete a note by ID.

## Local Development

To set up this project locally for development, you will need to have Node.js and npm installed on your system.

### Getting Started with the Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/bereket-molla/Keeper.git
   cd Keeper
   npm install

   cd backend
   npm install

   # set up your environment variables URI and PORT
   npm start

   ```
