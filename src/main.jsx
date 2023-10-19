import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import SignUp from './pages/SignUp';
import AuthProvider from './pages/provider/AuthProvider';
import BrandProducts from './pages/BrandProducts';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/brandproducts/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/brandproduct/${params.brand}`)
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
