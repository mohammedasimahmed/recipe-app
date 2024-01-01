import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function RegisterUser() {
    // console.log("user register")
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("User already registered");
    }
  }

  return (
    <div>
      <section class=" w-screen h-screen bg-gray-900 ">
        <div class="flex flex-col items-center justify-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold ">
            Register
          </a>
          <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Register into your account
              </h1>
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label  class="block mb-2 text-sm font-medium ">
                    Your Username
                  </label>
                  <input
                    type="text"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Username"
                    required="true"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label  class="block mb-2 text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="••••••••"
                    class="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500focus:border-blue-500"
                    required="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={RegisterUser}
                >
                  Register
                </button>
                <p class="text-sm font-light text-white">
                  Already Have an account
                  <a
                    href="#"
                    class="font-medium ml-2 text-primary-600 hover:underline text-primary-500"
                    onClick={() => navigate("/login")}
                  >
                    Login
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

export default Register;
