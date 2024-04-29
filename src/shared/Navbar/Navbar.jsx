import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      toast.success("Logout Successfully");
      navigate("/login");
    });
  };
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div>
      <div className="navbar h-20 px-0 md:px-4 lg:px-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
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
              className="menu z-50 menu-sm backdrop-blur-lg text-white dropdown-content p-2 border border-[#00E661]   mt-4 rounded-box min-h-[calc(100vh-80px)] w-56"
            >
              <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
                {/* navlink for phone */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "  font-bold text-[#00E661]" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allCrafts"
                  className={({ isActive }) =>
                    isActive ? "  font-bold text-[#00E661]" : ""
                  }
                >
                  All Art & craft
                </NavLink>
                <NavLink
                  to="/addCraft"
                  className={({ isActive }) =>
                    isActive ? "  font-bold text-[#00E661]" : ""
                  }
                >
                  Add Craft
                </NavLink>
                <NavLink
                  to="/myCraftList"
                  className={({ isActive }) =>
                    isActive ? "  font-bold text-[#00E661]" : ""
                  }
                >
                  My Art & Craft
                </NavLink>
              </div>
            </ul>
          </div>

          <Link to="/">
            <h2 className="text-xl md:text-2xl text-[#00E661] font-black ">
              Painters Nest
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "  font-bold text-[#00E661]"
                    : "hover:text-[#00E661]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allCrafts"
                className={({ isActive }) =>
                  isActive
                    ? "  font-bold text-[#00E661]"
                    : "hover:text-[#00E661]"
                }
              >
                All Art & craft
              </NavLink>
              <NavLink
                to="/addCraft"
                className={({ isActive }) =>
                  isActive
                    ? "  font-bold text-[#00E661]"
                    : "hover:text-[#00E661]"
                }
              >
                Add Craft
              </NavLink>
              <NavLink
                to="/myCraftList"
                className={({ isActive }) =>
                  isActive
                    ? "  font-bold text-[#00E661]"
                    : "hover:text-[#00E661]"
                }
              >
                My Art & Craft
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-end pr-4 lg:pr-0">
          {/* toggle button for theme */}
          <label className="swap swap-rotate mr-3">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleThemeToggle} type="checkbox" />
            {/* sun icon */}
            <svg
              className="swap-off fill-current w-6 h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-6 h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="flex items-center gap-3 lg:flex">
            {/* {user && (
              <div className="avatar">
                <div className={`w-10 rounded-full border-2 border-[#00E661]`}>
                  <Tooltip
                    className="bg-[#00E661] font-bold"
                    content={user.displayName}
                    placement="bottom"
                  >
                    <span>
                      <img src={user?.photoURL ? user?.photoURL : ""} />
                    </span>
                  </Tooltip>
                </div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )} */}
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL ? user?.photoURL : ""}
                        id="userName"
                      />
                      <Tooltip
                        className="z-50"
                        variant="info"
                        anchorId="userName"
                        place="top"
                        content={user?.displayName}
                      ></Tooltip>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow-md rounded-md border border-[#00E661] menu menu-sm  dropdown-content bg-base-200 w-52"
                  >
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    className="bg-[#00E661] font-grotesk"
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                    }}
                    size="md"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    className="border-[#00E661] border font-grotesk md:flex hidden"
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                    }}
                    size="md"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
