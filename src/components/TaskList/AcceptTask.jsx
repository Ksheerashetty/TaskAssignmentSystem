import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#FF5400] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-lg font-medium px-3 py-1 rounded-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold"> {data ? data.taskTitle : ""}</h2>
      <p className="text-sm mt-3">{data ? data.taskDescription : ""}</p>
      <div className="flex justify-between mt-7">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-sm hover:bg-green-400 border-2 border-green-700">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-sm hover:bg-red-400 border-2 border-red-700">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
