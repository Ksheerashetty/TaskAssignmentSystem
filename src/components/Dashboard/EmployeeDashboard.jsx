import Header from "../Common/Header";
import TaskCount from "../Common/TaskCount";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#000131] h-screen w-full">
      <Header
        changeUser={props.changeUser}
        loggedUserData={props.loggedUserData}
      />
      <TaskCount loggedUserData={props.loggedUserData} />
      <TaskList loggedUserData={props.loggedUserData} />
    </div>
  );
};

export default EmployeeDashboard;
