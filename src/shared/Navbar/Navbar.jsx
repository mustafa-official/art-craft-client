import { Button } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent backdrop-blur-md h-20 px-0 md:px-4 lg:px-12  text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu z-50 menu-sm bg-[#212428] dropdown-content p-2 border border-[#FF26A2] mt-4 rounded-box min-h-[calc(100vh-80px)] w-56"
            >
              <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
                {/* navlink for phone */}
              </div>
            </ul>
          </div>

          <Link to="/">
            <h2 className="text-xl font-bold text-secondary">
              Painting & Drawing
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="">
            <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-secondary font-bold" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allCrafts"
                className={({ isActive }) =>
                  isActive ? "underline text-secondary font-bold" : ""
                }
              >
                All Art & craft
              </NavLink>
              <NavLink
                to="/addCraft"
                className={({ isActive }) =>
                  isActive ? "underline text-secondary font-bold" : ""
                }
              >
                Add Craft
              </NavLink>
              <NavLink
                to="/myCraftList"
                className={({ isActive }) =>
                  isActive ? "underline text-secondary font-bold" : ""
                }
              >
                My Art & Craft
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-end pr-6 lg:pr-0">
          <div className="flex items-center gap-3 lg:flex">
            <Link to="/login">
              <Button
                className="bg-[#FF26A2] font-grotesk"
                style={{
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
                size="md"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
