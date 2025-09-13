import { useState, useContext } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];
    data.forEach((emp) => {
      if (assignTo.toLocaleLowerCase() === emp.firstName.toLocaleLowerCase()) {
        emp.tasks.push(newTask);
        emp.taskSummary.newTask += 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));
    console.log(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  }

  return (
    <div className="p-5 bg-[#101028] mt-7 rounded">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-wrap w-full items-start justify-between bg-[#000131] p-5 my-10 rounded-xl"
      >
        <div className="w-1/2 ">
          <div className="mb-2">
            <h3 className="text-sm text-gray-300 my-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              className=" bg-blue-950 rounded-sm text-sm p-2 w-4/5  outline-none "
              placeholder="Make a UI design"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-300 my-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className=" bg-blue-950 rounded-sm text-sm p-2 w-4/5  outline-none "
              type="date"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-300 my-1">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className=" bg-blue-950 rounded-sm text-sm p-2 w-4/5  outline-none "
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-300 my-1">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className=" bg-blue-950 rounded-sm text-sm p-2 w-4/5  outline-none "
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            className=" w-full h-44 bg-blue-950 p-2  outline-none rounded-sm"
          ></textarea>

          <button className="w-full hover:bg-blue-500 bg-blue-600 px-4 py-3 rounded-sm mt-4 cursor-pointer font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
