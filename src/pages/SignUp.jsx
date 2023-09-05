import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../utils/AuthSlice";

const SignUp = () => {
  // set dispatch
  const dispatch = useDispatch();
  // state auth
  const { message, messageSuccess } = useSelector((state) => state.auth);
  // state inputs form
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle change inputs form
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle register function
  const handleRegister = (e) => {
    e.preventDefault();

    // validate form input
    if (inputs.name === "") return;
    if (inputs.email === "") return;
    if (inputs.password === "") return;
    if (inputs.confirmPassword === "") return;

    // dispatch register
    // dispath action login
    try {
      dispatch(
        register({
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          confirmPassword: inputs.confirmPassword,
        })
      );
      // navigate to login page
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center text-gray-900">
        <div className="md:w-[400px] w-full px-6 bg-white h-screen flex justify-center flex-col">
          <h4 className="text-2xl font-semibold mb-4">Sign Up</h4>

          <form onSubmit={handleRegister}>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  className="bg-gray-100 w-full placeholder:text-sm px-4 py-3 outline-none"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="bg-gray-100 w-full placeholder:text-sm px-4 py-3 outline-none"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  className="bg-gray-100 w-full placeholder:text-sm px-4 py-3 outline-none"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="bg-gray-100 w-full placeholder:text-sm px-4 py-3 outline-none"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </div>
              {messageSuccess && (
                <p className="text-sm text-blue-600">* {messageSuccess}</p>
              )}
              {message && <p className="text-sm text-red-600">* {message}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 py-3 text-white"
              >
                Sign Up
              </button>
              <Link
                to={"/"}
                className="w-full bg-red-500 py-3 text-white block text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
          <div className="flex items-center justify-between py-3">
            <div className="text-sm font-semibold text-blue-600">
              <Link to={"/"} href="">
                Have an account?
              </Link>
            </div>
            <div className="text-sm font-semibold text-blue-600">
              <Link to={"/sign-up"}>Reset Password?</Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-screen"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
