import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="flex justify-center gap-11 my-4">
        <div className="services-nav">
          <button className="mx-5 inline-flex items-center bg-green-500 md:bg-cyan-400 border-0 lg:mt-0 mt-4 py-2 px-4 text-white rounded font-semibold">
            <Link
              className="text-white-200 hover:text-lime-100"
              to="/services/web-development"
            >
              Web development
            </Link>
          </button>
          <button className="mx-5 inline-flex items-center bg-green-500 md:bg-cyan-400 border-0 lg:mt-0 mt-4 py-2 px-4 text-white rounded font-semibold">
            <Link
              className="text-white-200 hover:text-lime-100"
              to="/services/web-design"
            >
              Web Design
            </Link>
          </button>
          <button className="mx-5 inline-flex items-center bg-green-500 md:bg-cyan-400 border-0 lg:mt-0 mt-4 py-2 px-4 text-white rounded font-semibold">
            <Link
              className="text-white-200 hover:text-lime-100"
              to="/services/seo"
            >
              SEO
            </Link>
          </button>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Services;
