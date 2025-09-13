import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {

  function handleLogout() {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  }
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {props.loggedUserData ? props.loggedUserData.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-[#FFB703] text-lg rounded-sm px-4 py-2 font-semibold cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
