import { Link, NavLink, Outlet } from "react-router-dom";
import { BsListTask  } from 'react-icons/bs';

import { FiPlusCircle  } from 'react-icons/fi';
import { FaHome } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  justify-center">
            <Outlet></Outlet>
        
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button bg-[#1597a8] my-5 lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu  p-6 w-80 h-full bg-gradient-to-b from-blue-700 to-black-400j text-white">
          <h2 className="text-2xl ">WELCOME {user?.email}  {user?.displayName}</h2>
              <div className="flex items-center justify-between">  
               
              <h1 className="text-lg font-bold mb-3">Taskey</h1>
              <NavLink to="/dashboard/newtask"><button className="text-3xl" title="Add New Task"><FiPlusCircle></FiPlusCircle></button></NavLink>
              </div>
            {/* Sidebar content here */}
            <li className="text-base"><Link to="/dashboard/mytask"><BsListTask/>To Do List</Link></li>
            
            <li className="text-base"><Link to="/"><FaHome/>Home</Link></li>

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;