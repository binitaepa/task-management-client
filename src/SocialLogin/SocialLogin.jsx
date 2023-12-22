
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    // const axiosPublic = UseAxiosPublic();
     const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            console.log(userInfo)
            // axiosPublic.post('/users', userInfo)
            navigate('/')
        })
    }
    return (
        <div className=" mb-10">
            <div className="items-center text-center">
                <button onClick={handleGoogleSignIn} className="btn bg-blue-200">
                    <FcGoogle className="mr-2"></FcGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;