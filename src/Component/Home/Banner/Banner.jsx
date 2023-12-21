
import { Link } from 'react-router-dom';
import img from '../../../assets/abstract-paper-background-concept.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
const Banner = () => {
    const {user}=useContext(AuthContext);
    const text="Let's Explore";
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage:`url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Simplify Task</h1>
      <p className="mb-5 text-3xl">Your Tasks, Your Way: Powerfully Simple Task Management.</p>
     
     {
        user ? <>
        <Link to='dashboard'>
        <button className="btn btn-primary">{text}</button></Link></>
        :
        <>
        <Link to='/login'>
      <button className="btn btn-primary">{text}</button></Link></>
     }
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;