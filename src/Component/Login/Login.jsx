import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Log In Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate('/dashboard');
            })
           
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content min-h-screen ">
                
                <div className="  md:w-[500px] min-h-screen shadow-2xl  bg-gradient-to-b from-blue-700 to-black-400">
                <p className="text-2xl font-bold text-white items-center flex justify-center align-middle mt-2">Welcome to Login</p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label text-white">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                       
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="px-6 text-xl text-center"><small>New Here? <Link className="text-xl border text-white bg-blue-800 rounded-md" to="/signup">Create an account</Link> </small></p>
                    <p className="px-6 text-xl text-center">Or Login with Google</p>
                    <SocialLogin ></SocialLogin>
                
                </div>
            </div>
        </div>
    );
};

export default Login;