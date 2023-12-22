import { Link, useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const MyTask = () => {
    const [tasks, refetch] = useTasks();
    const axiosSecure = UseAxiosSecure();
    // const pendingTask = tasks.filter(task => task.status === "Pending");
    const navigate = useNavigate();
    const handleUpdate = (task) => {
        // const taskdata = { status: "Completed" }
        axiosSecure.put(`/updatetask/${task._id}`)
            .then(data => {
              
                if (data.data.modifiedCount >= 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Done!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/comppletedtask")
                }
            })
            .catch(error => console.log(error))

    }

    const handleDelete = (task) => {
        axiosSecure.delete(`/deletetask/${task._id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

           
                    <div>
                       <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">*** My Task ***</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">To DO</h3>
        </div>


                        <div className="overflow-x-auto mx-10 shadow-xl">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks.map((task, index) =>
                                            <tr key={task._id}>

                                                <td>{index + 1}</td>
                                                <td>
                                                    <h1 className="text-xl font-bold">{task.title}</h1>
                                                    <p className="text-gray-500">{task.details}</p>
                                                </td>
                                                <td >
                                                    <button onClick={() => { handleUpdate(task) }} className='btn'>  {task.status}</button>
                                                </td>
                                                <td> <div className='flex justify-center items-center'>
                                                    <Link to={`/dashboard/updatetask/${task._id}`}>
                                                        <p className='text-xl py-3 px-3'>
                                                            <AiFillEdit />
                                                        </p>
                                                    </Link>


                                                    <button onClick={() => { handleDelete(task) }} className="btn btn-ghost btn-xs text-2xl" title="Delete"><MdDelete /></button>
                                                </div>
                                                </td>
                                           

                                            </tr>)
                                    }

                                </tbody>


                            </table>
                        </div>
                    </div>

            
        </div>
    );
};

export default MyTask;