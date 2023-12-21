import { Link } from "react-router-dom";
import { BsListTask  } from 'react-icons/bs';
import { MdTaskAlt  } from 'react-icons/md';
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
        
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button bg-[#1597a8] my-5 lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu  p-6 w-80 h-full bg-gradient-to-b from-blue-700 to-black-400 text-white">
          <h2 className="text-2xl ">WELCOME {user?.email || user?.displayName}</h2>
              <div className="flex items-center justify-between">
               
              <h1 className="text-lg font-bold mb-3">Taskey</h1>
              <Link to="/newtask"><button className="text-3xl" title="Add New Task"><FiPlusCircle/></button></Link>
              </div>
            {/* Sidebar content here */}
            <li className="text-base"><Link to="/"><BsListTask/>My Task</Link></li>
            <li className="text-base"><Link to="/comppletedtask"><MdTaskAlt/>Completed Task</Link></li>
            <li className="text-base"><Link to="/"><FaHome/>Home</Link></li>

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;