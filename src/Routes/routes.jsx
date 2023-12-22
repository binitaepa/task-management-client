import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SIgnUp/SignUp";
import Main from "../Component/Main/Main";
import Dashboard from "../Dashboard/Dashboard";
import NawTask from "../Dashboard/NawTask";
import MyTask from "../Dashboard/MyTask";
import UpdateTask from "../Dashboard/UpdateTask";
import COntactUs from "../Component/ContactUs/COntactUs";
import Plans from "../Component/Plans/Plans";
import Pricing from "../Component/Pricing/Pricing";
import AboutUs from "../Component/AboutUs/AboutUs";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/plan',
            element:<Plans></Plans>
        },
        {
            path:'/price',
            element:<Pricing></Pricing>
        },
        {
            path:'/aboutus',
            element:<AboutUs></AboutUs>
        },
        {
            path:'/contact',
            element:<COntactUs></COntactUs>
        }
    ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
       {
        path:'newtask',
        element:<NawTask></NawTask>
       },
       {
        path:'mytask',
element:<MyTask></MyTask>
       },
       {
        path: "updatetask/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) => fetch(`https://task-management-server-pink.vercel.app/findmyonetask/${params.id}`)
    },
    ]
    },
  ]);
  export default router;