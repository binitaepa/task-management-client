import { useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const COntactUs = () => {
    const { register,reset, formState: { errors } } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        
           
                //console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Send Message Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset(); 
            
    };
    return (
        <div>
        <div  className='bg-white pb-8 md:pb-0 py-20 '>

        <div className=  "  border-[1px] border-b-[6px] border-blue-500">
        <h2 className="font-bold text-4xl uppercase   text-black text-center">COntact</h2>
        </div>


<div className="max-w-screen-lg lg:mx-auto items-center justify-center  lg:mt-20">




<form
ref={form} onSubmit={sendEmail}
    
    className="col-span-7 bg-gradient-to-b from-blue-700 to-black-400 p-6 rounded-lg border border-sec-color lg:mx-0 mx-8 lg:mt-0 mt-10"
    
>
    <div className="form-control">
        <label className="label">
            <span className="">Name</span>
        </label>
        <input
            type="text"
            placeholder="Your Name" 
            
            // name="user_name"
            {...register("user_name", { required: true })}
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
        />
        {errors.name && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>
    <div className="form-control">
        <label className="label">
            <span className="">Email</span>
        </label>
        <input
            type="email"
            placeholder="Your Email" 
            // name="user_email"
            {...register("user_email", { required: true })}
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
        />
        {errors.email && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>

    <div className="form-control">
        <label className="label">
            <span className="">Message</span>
        </label>
        <textarea
            {...register("message", { required: true })} 
            // name="message"
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
            cols={30}
            rows={4}
            placeholder="Write your message"
        ></textarea>
        {errors.message && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>

    <button type="submit" className='mx-auto btn mt-4 lg:btn-md btn-sm bg-black  text-white flex items-center gap-3 uppercase font-medium  py-2 px-4 rounded-lg border-[1px] border-b-[6px] hover:bg-[#a64da6] hover:shadow-[0px]'>Send Message</button>
</form>
</div>
<div className="h-14 w-full bg-transparent"></div>

</div>
    </div>
    );
};

export default COntactUs;