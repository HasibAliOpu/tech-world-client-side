import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:w-1/2 p-10 md:p-0  mx-auto">
      <div className="flex flex-col items-start justify-between w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
        <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 ">
          <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
            <h4 className="w-full text-4xl font-medium text-blue-600 leading-snug">
              Please Register!!
            </h4>
            <form className="relative w-full mt-6 space-y-8">
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Email Address
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base  bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Password
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-900">
                    I agree with the{" "}
                    <button className="text-blue-600 hover:underline dark:text-blue-500">
                      terms and conditions
                    </button>
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  className="inline-block w-full px-5 py-3 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-full hover:bg-blue-500 ease"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="text-center text-lg">
                Already Have An Account?{" "}
                <Link
                  className="text-xl text-blue-500 hover:text-blue-800"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
          <svg
            className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <g fillRule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current"
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <g fillRule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Register;
