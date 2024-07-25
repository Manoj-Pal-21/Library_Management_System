# Library Management System

## Description
This project is a Library Management System implemented using the MERN stack (MongoDB, Express.js, React.js,Redux, Node.js). It facilitates user and admin operations for managing books, issuing books, handling book requests, and user management.

## Features

### For Users:
- **Authentication:** Sign Up and Login functionality.
- **Browse Books:** View all available books.
- **Issue Books:** Request to borrow books, view issued books in a pending state.
- **Manage Issued Books:** Track issued books and their status.

### For Admins:
- **Authentication:** Separate login for admin access.
- **Admin Credentials:** Username: `manoj21` | Name: `manoj pal` | Password: `123456`
- **Manage Books:**
  - View all books in the library.
  - Add new books to the library.
  - Delete books from the library.
- **Manage Issued Book Requests:**
  - View requests from users to borrow books.
  - Accept or reject book issuance requests.
- **View User Details:**
  - Access user data and details.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **State Management:** Redux Toolkit
- **Styling:** CSS & Bootstrap
- **Deployment:** Heroku (Backend), Netlify (Frontend)


## Installation
To run this project locally, follow these steps:

1. Clone the repository:

2. Navigate into the project directory:

3. Navigate into the Library Management System directory:

4. Install backend dependencies:

5. Set up environment variables:
- Create a `.env` file in the root of `Library Management System` directory.
- Add the following environment variables:
  ```
  PORT=3000  // or any other port you want to use
  MONGODB_URI="mongodb+srv://manojpal21935:Sawan%401999@cluster0.m0oacun.mongodb.net/Liberary?retryWrites=true&w=majority&appName=Cluster0"
  JWT_SECRET=e4c9b1130b2315a020780122a4b8e2c7c6d5d64dc5243d1fef7e34427f907391
  ```
6. Start the backend server:
- For development (with nodemon):
  ```
  npm run server
  ```
- For production:
  ```
  npm start
  ```
7. Navigate to the frontend directory:

8. Install frontend dependencies:

9. Start the frontend server:

10. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- **User:** Sign up or login using the provided forms. Browse available books, issue books, and manage issued books.
- **Admin:** Access the admin panel by logging in with the provided admin credentials (Username: `manoj21` | Name: `manoj pal` | Password: `123456`). Manage books (add, delete), review and manage book issuance requests, and view user details.

## Future Improvements
- Implement real-time notifications using web sockets.
- Improve UI/UX with responsive design and animations.
- Add search and filter features for books and user data.
- Enhance security features and error handling.

## Contributing
Contributions are welcome! Fork the repository and submit a pull request with your improvements.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


