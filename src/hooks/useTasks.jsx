import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const useTasks = () => {
    
        const axiosSecure = UseAxiosSecure();
        const { isLoading,refetch,data: tasks=[]} = useQuery({
            queryKey: ['tasks'],
            queryFn: async () => {
                const res = await axiosSecure.get("/addtask")
                return res.data;
            }
        })
        return [tasks,refetch,isLoading];
};

export default useTasks;