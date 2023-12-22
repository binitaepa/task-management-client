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
        loader: ({ params }) => fetch(`http://localhost:5000/findmyonetask/${params.id}`)
    },
    ]
    },
  ]);
  export default router;