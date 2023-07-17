import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from './routes/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about/:aboutId",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
