import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/store";

const Login = () => {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);

  const LoginUser = async () => {
    try {
      const result = await axios.post("https://recipe-app-backend1.onrender.com/auth/login", {
        username: newUsername,
        password,
      });

      localStorage.setItem("userID", result.data.userID);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("username", newUsername);
      dispatch(setUsername(newUsername));
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Wrong Username or Password");
    }
  };

  return (
    <div>
      <section class=" w-screen h-screen bg-gray-900 ">
        <div class="flex flex-col items-center justify-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a class="flex items-center mb-6 text-2xl font-semibold">Login</a>
          <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Login to your account
              </h1>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label class="block mb-2 text-sm font-medium ">
                    Your username
                  </label>
                  <input
                    type="text"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Username"
                    required="true"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium ">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500focus:border-blue-500"
                    required="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={LoginUser}
                >
                  Login
                </button>
                <p class="text-sm font-light text-white">
                  Don’t have an account yet?{" "}
                  <a
                    class="font-medium ml-2 text-primary-600 hover:underline text-primary-500"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
