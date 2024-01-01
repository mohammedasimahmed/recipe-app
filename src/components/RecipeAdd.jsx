import axios from "axios";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router";

const RecipeAdd = () => {
  const [allrecipes, setAllRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(`https://recipe-app-backend1.onrender.com/recipes`);
        console.log(response.data);
        setAllRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-screen justify-center mb-4">
          <div className="flex-1 flex justify-end">
          <h1 className="text-white text-5xl ">Recipes</h1>

          </div>
          <div className="flex-1 flex justify-end items-center mr-8" onClick={()=>navigate("/addyourrecipe")}>
            <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Add Recipe
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap ">
          {allrecipes &&
            allrecipes.map((recipe) => {
              return (
                <Tilt>
                  <div
                    class="max-w-sm m-4  border  rounded-lg shadow bg-gray-800 border-gray-700"
                    onClick={() =>
                      navigate(`viewrecipe/${recipe._id}`, {
                        state: { recipe },
                      })
                    }
                  >
                    <div className="h-[300px]">
                      <img
                        class="rounded-t-lg w-full h-full"
                        src={recipe.imageUrl}
                        alt=""
                      />
                    </div>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                          {recipe.name}
                        </h5>
                      </a>
                      <div class="mb-3 h-[200px] font-normal text-gray-400 overflow-auto">
                        {recipe.instructions}
                      </div>
                      <a
                        class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Click to know more
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Tilt>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecipeAdd;
