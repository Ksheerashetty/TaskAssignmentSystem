import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ loggedUserData }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {loggedUserData.tasks.map((task, index) => {
        if (task.newTask) {
          return <NewTask data={task} key={index} />;
        }
        if (task.active) {
          return <AcceptTask data={task} key={index} />;
        }
        if (task.failed) {
          return <FailedTask data={task} key={index} />;
        }
        if (task.completed) {
          return <CompleteTask data={task} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
