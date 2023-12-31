import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/plan">Plans</Link></li>
    <li><Link to="/price">Pricing</Link></li>
    <li><Link to="/aboutus">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    {
            user ? <>
                <span className="mt-1 font-bold text-lg">{user?.displayName || user?.email}</span>
                <button onClick={handleLogOut} className="btn btn-ghost bg-white text-black ml-2">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    
    
</>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-full bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Taskey</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="btn ">Get started</button></Link>
                </div>
            </div>
    );
};

export default Navbar;