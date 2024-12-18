import React from "react";

const Home = () => {
  return (
    <div className="h-[400px] p-4 border-2 border-red-500 md:h-[600px]  flex justify-center items-center">
      <div className="w-screen md:w-[400px] flex flex-col gap-4">
        <h1 className="md:text-2xl font-bold drop-shadow-sm">React-Router</h1>
        <p className="text-sm md:text-md drop-shadow-sm">
          React Router is a library for handling navigation in React apps. It
          allows you to define routes and render components based on the URL.
          With features like nested routes, route parameters, and dynamic
          routing, it supports building complex UIs. React Router ensures
          seamless navigation without page reloads. It’s ideal for creating
          single-page applications with multiple views.
        </p>
      </div>
    </div>
  );
};

export default Home;
