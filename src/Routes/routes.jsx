import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SIgnUp/SignUp";
import Main from "../Component/Main/Main";
  

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
  ]);
  export default router;