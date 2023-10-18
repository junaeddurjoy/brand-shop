import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProduct></UpdateProduct>,
    loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
  },
  {
    path: "/products",
    element: <Products></Products>,
    loader: () => fetch('http://localhost:5000/product')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
