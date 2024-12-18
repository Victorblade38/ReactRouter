import React from "react";

const SectionA = () => {
  return (
    <div className="h-[400px] p-4 border-2 border-red-500 md:h-[600px]  flex justify-center items-center">
      <div className="w-screen md:w-[400px] flex flex-col gap-4">
        <h1 className="md:text-2xl font-bold drop-shadow-sm">
          Pros of React Router:
        </h1>
        <ul className="text-sm md:text-md drop-shadow-sm">
          <li>
            <strong>Seamless Navigation:</strong> Enables fast, client-side
            navigation without full page reloads.
          </li>
          <li>
            <strong>Dynamic Routing:</strong> Allows routes to adapt based on
            application state or user inputs.
          </li>
          <li>
            <strong>Nested Routes:</strong> Easily manage complex layouts by
            nesting routes for hierarchical views.
          </li>
          <li>
            <strong>Flexibility:</strong> Supports features like route
            parameters, lazy loading, and custom navigation.
          </li>
          <li>
            <strong>Active Community:</strong> Extensive documentation and
            strong community support for troubleshooting.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionA;
