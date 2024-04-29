import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { registerUser, updateProfileInfo } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password, photo);
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!/.*[A-Z].*/.test(password)) {
      return toast.error("Password must have an uppercase letter");
    }
    if (!/.*[a-z].*/.test(password)) {
      return toast.error("Password must have a lowercase letter");
    }

    registerUser(email, password)
      .then(() => {
        updateProfileInfo(name, photo).then(() => {
          // console.log(result.user);
          navigate("/");
          // window.location.reload();
          toast.success("Register Successfully");
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error?.message?.slice(10)}`);
      });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="px-5 md:px-10 pt-1  pb-8 lg:px-14">
      <div className="w-full mx-auto mt-8 lg:mt-6 max-w-md px-4 md:px-8 py-8 mb-3 lg:mb-5 space-y-2 rounded-xl border border-[#00E661] ">
        <h1 className="text-2xl font-bold text-center mb-12">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
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
          <button className="block text-white w-full font-bold p-3 text-center  rounded-sm  bg-[#00E661]">
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
