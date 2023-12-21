
import { MdDeveloperMode } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { MdCorporateFare } from "react-icons/md";
const People = () => {
 
    return (
        <div>
          
             <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">*** People Who are Using ***</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">Use Now</h3>
        </div>
       <div className="flex flex-row gap-2 items-center align-middle justify-center mb-5">
       <div>
       <p className="text-3xl uppercase ml-10 flex mb-5"><MdDeveloperMode className="text-blue-600"></MdDeveloperMode> Developers</p>
       <div className="avatar ml-10 p-5">
        
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="card w-96 mr-10 mt-5 bg-gradient-to-b from-blue-700 to-black-400 text-black">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Why they use!</h2>
    <p>Developers should embrace task management websites as indispensable tools for optimizing their workflow and enhancing productivity. These platforms offer a systematic approach to organizing tasks, allowing developers to create, prioritize, and set deadlines for their assignments. The collaborative features enable seamless communication and allocation of responsibilities among team members, fostering a sense of teamwork. With clear progress tracking, developers can visualize completed tasks and identify potential bottlenecks, ensuring projects stay on course. Task management tools also contribute to effective time management, enabling developers to allocate their time efficiently and focus on high-priority tasks. The reduction of stress is notable, as these tools provide a centralized location for all task-related information, eliminating the anxiety associated with missed deadlines or overlooked tasks. Additionally, the adaptability of these tools to various workflows, combined with their documentation capabilities, ensures developers can tailor their task management approach to suit specific needs and methodologies. Overall, the use of task management websites streamlines development processes, encourages collaboration, and ultimately leads to the successful and timely delivery of high-quality software products.</p>
    
  </div>
</div>
       </div>
       <div>
       <p className="text-3xl uppercase ml-10 flex mb-5"><MdCorporateFare className="text-blue-700"></MdCorporateFare> corporates</p>
       <div className="avatar ml-10 p-5">
        
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="card w-96 mr-10 mt-5 bg-gradient-to-b from-blue-700 to-black-400 text-black">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Why they use!</h2>
    <p>Corporate professionals widely use task management tools to streamline their work processes and boost overall efficiency. These tools offer several benefits that cater to the dynamic and often demanding nature of corporate environments.

Firstly, task management tools provide a centralized platform for organizing and prioritizing work. Corporate professionals often juggle multiple projects, tasks, and deadlines. Task management tools help them create a structured task list, set priorities, and allocate time effectively, ensuring that critical assignments are addressed promptly.


Furthermore, these tools contribute to effective time management. Corporate professionals can use task management platforms to schedule tasks, set deadlines, and track progress. This ensures that projects stay on track and are completed within the specified timelines, helping organizations meet their strategic objectives,encourages collaboration, and ultimately leads to the successful and timely delivery of high-quality software products..



In summary,We can say corporate professionals use task management tools to enhance organization, foster collaboration, optimize time management, track progress, and ultimately contribute to the overall success of projects and organizational goals. These tools have become essential in empowering professionals to navigate the complexities of the corporate world with greater ease and efficiency.





</p>
    
  </div>
</div>
       </div>
       <div>
       <p className="text-3xl uppercase flex mb-5 ml-10"><PiBankFill className="text-blue-700"></PiBankFill> Bankers</p>
       <div className="avatar ml-10 p-5">
        
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div className="card w-96 mr-10 mt-5 bg-gradient-to-b from-blue-700 to-black-400 text-black">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Why they use!</h2>
    <p>Bankers leverage task management tools as indispensable assets in navigating the multifaceted landscape of the financial industry. Given the stringent regulatory environment, these tools play a pivotal role in ensuring compliance with various laws and regulations. From client relationship management to project execution, bankers rely on task management platforms to organize, prioritize, and monitor an array of tasks. In an industry where efficiency is paramount, these tools contribute to optimizing workflows, facilitating seamless collaboration among teams, and enhancing overall productivity. The ability to set and meet deadlines, manage risks, and document standard operating procedures further solidifies the importance of task management tools in the daily operations of bankers. Ultimately, these tools empower bankers to navigate the complexities of their roles with precision, meet regulatory obligations, and deliver high-quality financial services in a dynamic and ever-evolving industry.In summary,We can say corporate professionals use task management tools to enhance organization, foster collaboration, optimize time management, track progress, and ultimately contribute to the overall success of projects and organizational goals. These tools have become essential in empowering professionals to navigate the complexities of the corporate world with greater ease and efficiency.</p>
    
  </div>
</div>
       </div>
       </div>
        <div className="items-center text-center ">
            
        <div className="stats bg-gradient-to-b from-blue-700 to-black-400  stats-vertical text-center lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default People;