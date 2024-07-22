import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/Signup.jsx'
import AllBooks from './components/AllBooks.jsx'
import { UserProvider } from './context/UserContext.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/sign-in', element: <Login /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/all-books', element: <AllBooks /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)