import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  //two way binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-blue-400 rounded-xl p-4">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center gap-5 p-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-blue-500 rounded-sm py-2 px-6 outline-none text-xl"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-blue-500 rounded-sm py-2 px-6 outline-none text-xl"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button className="bg-blue-600 text-white rounded-sm py-2 px-6 font-bold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] hover:bg-blue-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
