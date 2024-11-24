import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Categorynews from './Components/Categorynews.jsx';
import Login from './Components/Login.jsx';
import Registar from './Components/Registar.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Newsdetails from './Components/Newsdetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:"",
            element:<Navigate to={"/category/01"}></Navigate>
          },
          {
            path:"/category/:id",
            element: <Categorynews></Categorynews>,
            loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          },
          
        ]
      },
      {
        path:'/singlenews/:id',
        element:<Newsdetails></Newsdetails>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Registar></Registar>
      },
      {
        path:"*",
        element:<h2>Error</h2>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    
  </StrictMode>,
)
