import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar  shadow-md top-0 left-0 right-0 z-10">
      <div className="container flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-dark">Watermark</h1>
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="text-dark" />
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex items-center justify-center text-sm font-bold uppercase`}
        >
          <li className="mx-2 my-2 hover:underline">
            <a className="text-dark" href="#">
              Home
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-dark" href="#">
              Feedback
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-dark" href="#">
              Pricing
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-dark" href="#">
              Blog
            </a>
          </li>
        </ul>
        <div className={`${isOpen ? "block" : "hidden"} md:flex items-center`}>
          <button className="px-4 py-2 underline rounded-full font-bold hover:bg-blue-800  mr-2">
            Sign In
          </button>
          <button className="px-4 py-2 bg-sky-800 text-white rounded-full font-bold hover:bg-sky-600 focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden navbar-dropdown fixed top-0 left-0 right-0 z-10 bg-sky-800 shadow-lg`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white">Watermark</h1>
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="text-white" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center py-6 px-6">
          <li className="mx-2 my-2 hover:underline">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-white" href="#">
              Feedback
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-white" href="#">
              Pricing
            </a>
          </li>
          <li className="mx-2 my-2 hover:underline">
            <a className="text-white" href="#">
              Blog
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-between py-4 px-6 border-t border-gray-800">
          <button className="px-4 py-2 bg-blue-700 rounded-full text-white font-bold hover:bg-blue-800 focus:outline-none mr-2">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-full text-white font-bold hover:bg-blue-600 focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
