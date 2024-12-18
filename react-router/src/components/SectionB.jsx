import React from "react";

const SectionB = () => {
  return (
    <div className="h-[400px] p-4  md:h-[600px]  flex justify-center items-center">
      <div className="w-screen md:w-[400px] flex flex-col gap-4">
        <h1 className="md:text-2xl font-bold drop-shadow-sm">
          Cons of React Router:
        </h1>
        <ul className="text-sm md:text-md drop-shadow-sm">
          <li>
            <strong>Complexity:</strong> Managing nested routes and dynamic
            parameters can become challenging in large apps.
          </li>
          <li>
            <strong>Learning Curve:</strong> Requires understanding React hooks
            like <code>useNavigate</code> and <code>useParams</code> for
            effective use.
          </li>
          <li>
            <strong>Client-Side Dependency:</strong> Relies heavily on
            JavaScript; navigation breaks if scripts fail to load.
          </li>
          <li>
            <strong>Not SEO-Friendly by Default:</strong> Requires additional
            configuration like server-side rendering (SSR) for better SEO.
          </li>
          <li>
            <strong>Frequent Updates:</strong> API changes can require
            significant adjustments when upgrading versions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionB;
