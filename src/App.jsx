import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setloggedUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser"); 
    if (loggedInUser) {
      const uData = JSON.parse(loggedInUser);
      setUser(uData);
      setloggedUserData(uData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: null })
      );
    } else if (userData) {
      const employee = userData.EmpData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser({ role: "employee" });
        setloggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role == "admin" && (
        <AdminDashboard changeUser={setUser} localStorage={loggedUserData} />
      )}
      {user?.role == "employee" && (
        <EmployeeDashboard
          changeUser={setUser}
          loggedUserData={loggedUserData}
        />
      )}
    </>
  );
};

export default App;
