import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div className="px-5 md:px-10 pt-1 text-black pb-8 lg:px-14">
      <div className="w-full mx-auto mt-8 lg:mt-6 max-w-md px-4 md:px-8 py-8 mb-3 lg:mb-5 space-y-2 rounded-xl border border-[#c2227d] ">
        
        <h1 className="text-2xl font-bold text-center mb-12">Register</h1>
        <form  className="space-y-6">
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md  border border-black "
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md  border border-black "
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border border-black "
            />
          </div>
          <div className="space-y-1 text-sm">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full  px-4 py-3 rounded-md border  border-black"
              />
              <div className="absolute top-[50%] right-0 translate-x-[-50%] translate-y-[-50%]">
                {showPassword ? (
                  <IoIosEyeOff
                    onClick={handleShowPassword}
                    className="text-2xl cursor-pointer"
                  ></IoIosEyeOff>
                ) : (
                  <IoIosEye
                    onClick={handleShowPassword}
                    className="text-2xl cursor-pointer"
                  ></IoIosEye>
                )}
              </div>
            </div>
          </div>
          <button className="block w-full font-bold p-3 text-center text-white rounded-sm  bg-[#FF26A2]">
            Register
          </button>
          
        </form>

        <p className="text-xs text-center sm:px-6">
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold">
            Login
          </Link>
        </p>
      </div>
      
    </div>
    );
};

export default Register;