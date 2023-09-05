import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../utils/AuthSlice";

const Login = () => {
  // set navigate
  const navigate = useNavigate();
  // set dispatch
  const dispatch = useDispatch();
  // state auth
  const { token, isLoading, message } = useSelector((state) => state.auth);
  // state inputs form
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  // component didmount if get token redirect to page Dashboard
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  // handle change even form inputs
  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    // validate form input
    if (inputs.email === "") return;
    if (inputs.password === "") return;

    // dispath action login
    try {
      dispatch(login({ email: inputs.email, password: inputs.password }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center text-gray-900">
        <div className="md:w-[400px] w-full px-6 bg-white h-screen flex justify-center flex-col">
          <h4 className="text-2xl font-semibold mb-4">Sign In</h4>

          <form onSubmit={handleLogin}>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Username</label>

                <input
                  type="email"
                  className="bg-gray-100 w-full placeholder:text-sm px-4 py-3 outline-none"
                  placeholder="Username / Email"
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
              {message && <p className="text-sm text-red-600">* {message}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 py-3 text-white inline-block text-center"
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between py-3">
            <div className="text-sm font-semibold text-blue-600">
              <a href="">Forgot Password?</a>
            </div>
            <div className="text-sm font-semibold text-blue-600">
              <Link to={"/sign-up"}>Sign Up</Link>
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

export default Login;
