import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };
  const animationVariants2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };
  const animationOptions2 = {
    variants: animationVariants2,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // if(onlyOnce)scrollDiv.current.scrollTop = 0;
      // setOnlyOnce(false);
    }
  }, [controls, inView]);
  return (
    <div>
      <section class=" bg-gray-900 w-screen h-screen">
        <div class="grid  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div ref={ref} animate={controls} {...animationOptions} class="mr-auto mt-20 place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Recipe Hub , Share Your Amazing Recipes
              </h1>
              <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                Unlock a world of flavors at Recipe Hub! Share your signature
                dishes, explore diverse recipes, and savor the joy of culinary
                creativity with a community of passionate home cooks
              </p>
              <a
                href="/addrecipe"
                class="inline-flex hover:bg-white hover:text-black items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
              >
                Get started
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            {...animationOptions2}
            class="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img src="/biryani.png" alt="mockup" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
