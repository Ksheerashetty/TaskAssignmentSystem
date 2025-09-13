const TaskCount = ({ loggedUserData }) => {
  return (
    // <div className="flex justify-between gap-5 mt-10 rounded-4xl">
    //   <div className="w-[45%] py-6 px-9 bg-[#0269df]  rounded-2xl">
    //     <h2 className="text-3xl font-semibold">{loggedUserData.taskSummary.newTask}</h2>
    //     <h3 className="text-xl font-medium">New Task</h3>
    //   </div>
    //   <div className="w-[45%] py-6 px-9 bg-[#FF5400] rounded-2xl">
    //     <h2 className="text-3xl font-semibold">{loggedUserData.taskSummary.active}</h2>
    //     <h3 className="text-xl font-medium">Accepted Task</h3>
    //   </div>
    //   <div className="w-[45%] py-6 px-9 bg-[#047908] rounded-2xl">
    //     <h2 className="text-3xl font-semibold">{loggedUserData.taskSummary.completed}</h2>
    //     <h3 className="text-xl font-medium">Completed Task</h3>
    //   </div>
    //   <div className="w-[45%] py-6 px-9  bg-[#ff0638e3] rounded-2xl">
    //     <h2 className="text-3xl font-semibold">{loggedUserData.taskSummary.failed}</h2>
    //     <h3 className="text-xl font-medium">Failed Task</h3>
    //   </div>
    // </div>

    <div className="flex justify-between gap-5 mt-10 rounded-4xl">
      <div className="w-[45%] py-6 px-9 bg-[#22c55e] rounded-2xl">
        <h2 className="text-3xl font-semibold text-white">
          {loggedUserData.taskSummary.newTask}
        </h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-[#f59e0b] rounded-2xl">
        <h2 className="text-3xl font-semibold text-white">
          {loggedUserData.taskSummary.active}
        </h2>
        <h3 className="text-xl font-medium text-white">Active Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-[#3b82f6] rounded-2xl">
        <h2 className="text-3xl font-semibold text-white">
          {loggedUserData.taskSummary.completed}
        </h2>
        <h3 className="text-xl font-medium text-white">Completed Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-[#ef4444] rounded-2xl">
        <h2 className="text-3xl font-semibold text-white">
          {loggedUserData.taskSummary.failed}
        </h2>
        <h3 className="text-xl font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
