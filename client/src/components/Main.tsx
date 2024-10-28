import MyButton from "./MyButton";

const Main = () => {
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <main className="flex-1 flex gap-7 md:gap-7  md:flex-row flex-col">
      <div className="flex-1  flex justify-center md:justify-end items-center ">
        <img
          src={`${frontendUrl}/my-photo.jpg`}
          className="rounded-full  w-[200px] md:w-[300px] md:h-[300px] mt-auto md:mt-0  h-[200px] object-cover"
          alt="real"
        />
      </div>
      <div className="flex-1  flex flex-col mt-5  md:justify-center space-y-2 text-center">
        <div className=" md:w-fit h-fit space-y-2 md:space-y-4 md:ml-6">
          <h1
            className="text-xl text-tertiaryText-light-light dark:text-secondaryText-dark"
            style={{ lineHeight: "1" }}
          >
            Hello, I'm
          </h1>
          <h2
            className="text-4xl  dark:text-primaryText-dark font-medium"
            style={{ letterSpacing: "2px" }}
          >
            Bibek Koirala
          </h2>
          <h3 className="text-3xl text-secondaryText-light dark:text-secondaryText-dark">
            Full-Stack Developer
          </h3>
          <div className="flex mt-4 pt-3 md:pt-2 justify-center gap-4">
            <MyButton
              href={`${frontendUrl}/my_resume.pdf`}
              newPage={true}
              className=" rounded-full flex justify-center flex-col"
            >
              Preview CV
            </MyButton>
            <MyButton
              href="#contact-me"
              className=" flex justify-center rounded-full flex-col"
            >
              Contact Me
            </MyButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

/* 

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Main = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center min-h-[calc(100vh-80px)]">

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <div className="overflow-hidden rounded-full w-[220px] h-[220px] md:w-[340px] md:h-[340px] ring-4 ring-purple-100 dark:ring-purple-900">
                <img
                  src="/api/placeholder/400/400"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                  alt="Profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg animate-bounce">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 max-w-xl">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-xl font-medium text-gray-600 dark:text-gray-300 animate-fade-in">
                Hello, I'm
              </h1>
              <h2 className="text-5xl font-bold tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bibek Koirala
              </h2>
              <h3 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Full-Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
                Passionate about creating seamless digital experiences through innovative web solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="group relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-full bg-white border-2 border-purple-600 text-purple-600 transition-all hover:bg-purple-600 hover:text-white">
                <span className="relative">Download CV</span>
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </button>
              <button className="group relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                <span className="relative">Contact Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex gap-6 mt-8">
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
*/
