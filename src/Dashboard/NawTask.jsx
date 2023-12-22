import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../hooks/UseAxiosSecure";


const NawTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = UseAxiosSecure();
     const navigate = useNavigate();
    const onSubmit = taskdata => {

        axiosSecure.post('/addtask', taskdata)
            .then(data => {
                data?.data?.insertedId &&
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Task Added!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                navigate('/dashboard/mytask');

            })
            .catch(error => console.log(error));


    };


    return (
        <div>

<div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">*** Add Task***</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">Use Now</h3>
        </div>

            <div className='p-14 bg-[#F3F3F3] mx-14 mb-14'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Title of Task*</span>
                        </label>
                        <input type="text" placeholder="Title of Task" className="input input-bordered w-full " {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Deadline of Task*</span>
                        </label>
                        <input type="date" placeholder="Deadline" className="input input-bordered w-full " {...register("date", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="mx-4 my-2 text-red-500">
                        {errors.title && <span> Title is required</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Priority*</span>
                        </label>
                        <select className="select select-bordered" {...register("priority", { required: true })}>
                            <option disabled selected>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Status*</span>
                        </label>
                        <select className="select select-bordered" {...register("status", { required: true })}>
                            <option disabled selected>To do</option>
                            <option>On Going</option>
                            <option>Completed</option>
                            
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Task Details" {...register("details", { required: true, maxLength: 250 })}></textarea>
                    </div>
                    <div className="mx-4 my-2 text-red-500">
                        {errors.details && <span> Task Details is required</span>}
                    </div>
                    <input className="btn border-transparent my-4 bg-blue-600 text-white hover:bg-[#1597a8] hover:text-white py-4 px-5" type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default NawTask;