import axios from "axios";


const UseAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://task-management-server-pink.vercel.app/', 
      });

  return axiosSecure;
};

export default UseAxiosSecure;