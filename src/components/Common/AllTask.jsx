import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  //  console.log(userData, "authdata");

  const colors = [
    "border-[#3f4e9d]",
    "border-[#5f4e9d]",
    "border-[#7f4e9d]",
    "border-[#9f4e9d]",
    "border-[#bf4e9d]",
  ];
  // return (
  //   <div className="bg-[#1C1C1C] p-5 my-5 h-48 overflow-auto rounded">
  //     {authData.EmpData.map((value, index) => {
  //       return (
  //         // <div
  //         //   className="bg-[#3f4e9d] py-2 px-4 flex justify-between rounded mb-2 "
  //         //   key={index}
  //         // >
  //         //   <h2>{value.firstName}</h2>
  //         //   <h3>{value.tasks[0].title}</h3>
  //         //   <h5>Status</h5>
  //         // </div>
  //         <div
  //           key={index}
  //           style={{
  //             background: `linear-gradient(135deg, hsl(${
  //               index * 40
  //             }, 70%, 50%), hsl(${index * 40 + 30}, 70%, 40%))`,
  //           }}
  //           className="py-2 px-4 flex justify-between rounded mb-2"
  //         >
  //           <h2>{value.firstName}</h2>
  //           <h3>{value.tasks[0].title}</h3>
  //           <h5>Status</h5>
  //         </div>
  //       );
  //     })}
  //     <div className="bg-[#3f4e9d] py-2 px-4 flex justify-between rounded mb-2 ">
  //       <h2>{authData.EmpData[0].firstName}</h2>
  //       <h3>{authData.EmpData[0].tasks[0].title}</h3>
  //       <h5>Status</h5>
  //     </div>
  //     <div className="bg-[#5f4e9d] py-2 px-4 flex justify-between rounded mb-2 ">
  //       <h2>Ksheera</h2>
  //       <h3>UI design</h3>
  //       <h5>Status</h5>
  //     </div>
  //     <div className="bg-[#7f4e9d] py-2 px-4 flex justify-between rounded mb-2 ">
  //       <h2>Ksheera</h2>
  //       <h3>UI design</h3>
  //       <h5>Status</h5>
  //     </div>
  //     <div className="bg-[#9f4e9d] py-2 px-4 flex justify-between rounded mb-2 ">
  //       <h2>Ksheera</h2>
  //       <h3>UI design</h3>
  //       <h5>Status</h5>
  //     </div>
  //   </div>
  // );
  return (
    <div className=" p-5 my-5 rounded">
      {/* height issue */}
      <div className="bg-[#1f4e9d] py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-lg font-bold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-bold w-1/5">Task Title</h3>
        <h5 className="text-lg font-bold w-1/5">Active</h5>
        <h5 className="text-lg font-bold w-1/5">Completed</h5>
        <h5 className="text-lg font-bold w-1/5">Failed</h5>
      </div>
      <div className="overflow-auto">
        {userData?.EmpData?.map((value, index) => {
          return (
            // ${
            //     colors[index % colors.length]
            //   }
            <div
              className={` ${
                colors[index % colors.length]
              } border-2 py-2 px-4 flex justify-between rounded mb-2`}
              key={index}
            >
              <h2 className="text-lg font-medium w-1/5">{value.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5">
                {value.tasks[0].title}
              </h3>
              <h5 className="text-lg font-medium w-1/5 !text-blue-300">
                {value.taskSummary.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5  !text-green-700">
                {" "}
                {value.taskSummary.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 !text-red-600">
                {" "}
                {value.taskSummary.failed}
              </h5>
            </div>
          );
        })}
      </div>
      {/* <div className="h-20"></div> */}
    </div>
  );
};

export default AllTask;
