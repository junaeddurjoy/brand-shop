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
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/product')
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
    loader: () => fetch('http://localhost:5000/cart')
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
  {
    path: "/product/:id",
    element: <ProductDetails></ProductDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
