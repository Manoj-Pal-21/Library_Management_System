import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/Signup.jsx'
import AllBooks from './pages/book/AllBooks.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)