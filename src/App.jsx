import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Layout from './componets/layouts/Layout'
import ErrorPage from './pages/ErrorPage.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Register from './pages/Register.jsx'
import ProtectedRoute from './componets/ui/ProtectedRoute.jsx'


function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
    ]
  }])

  return <RouterProvider router={router} />

}

export default App
