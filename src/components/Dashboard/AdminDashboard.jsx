import Header from "../Common/Header";
import CreateTask from "../Common/CreateTask";
import AllTask from "../Common/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
