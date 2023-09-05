/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../utils/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state user
  const { user } = useSelector((state) => state.user);

  // set menu to toggle menu navbar
  const [menu, setMenu] = useState(false);
  // set settings to toggle menu settings
  const [setings, setSetings] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <nav className="z-[100] flex justify-between items-center px-4 md:px-6 py-3 bg-white fixed top-0 left-0 right-0 shadow-md text-gray-900 max-w-[1900px] mx-auto">
        {/* Logo and Menu */}
        <div className="flex md:gap-6 relative items-center gap-3">
          <AiOutlineMenu
            onClick={() => setMenu(!menu)}
            className="md:hidden text-xl cursor-pointer"
          />
          <Link to={"/dashboard"} className="font-semibold md:text-lg">
            My Sosial
          </Link>
          <div
            className={`fixed md:static top-0 transition-all duration-200 ease-in-out h-screen overflow-auto md:h-0 ${
              menu ? "left-0" : "left-[-1000px]"
            }  bg-slate-200 px-4 py-4 md:p-0 w-[260px] md:w-0 shadow-md`}
          >
            <AiOutlineMenu
              onClick={() => setMenu(!menu)}
              className="md:hidden text-xl cursor-pointer mb-4"
            />
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-100 px-4 py-2 text-sm outline-none border-none md:hidden mb-4"
                placeholder="Seach username.."
              />
              <AiOutlineSearch className="absolute top-2 right-3 text-gray-500 md:hidden" />
            </div>

            <div>
              <Menu />
            </div>
          </div>
        </div>
        {/* end menu */}

        {/* search bar */}
        <div className="w-[400px] items-center justify-center hidden md:block relative">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm outline-none placeholder:text-sm bg-gray-100"
            placeholder="Seach username.."
          />
          <AiOutlineSearch className="absolute top-3 right-3 text-gray-500" />
        </div>

        {/* Notify and Profile */}
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer relative hidden md:block">
            <AiOutlineMessage className="text-xl" />
            <div className="w-2 h-2 rounded-full bg-red-600 text-white absolute top-[-2px] text-sm"></div>
          </div>
          <div className="cursor-pointer relative hidden md:block">
            <AiOutlineBell className="text-xl" />
            <div className="w-2 h-2 rounded-full bg-red-600 text-white absolute top-[-2px] text-sm"></div>
          </div>
          <div
            onClick={() => setSetings(!setings)}
            className="cursor-pointer relative"
          >
            <img
              src={user.profile_pic}
              alt="logo"
              className="w-8 h-8 rounded-full object-cover bg-gray-200"
            />

            <div
              className={`px-4 pt-2 pb-4 rounded-md transition-all duration-300 fixed bg-white w-[200px] shadow-2xl ${
                setings ? "top-[65px] right-2" : " top-[65px] right-[-1000px]"
              }`}
            >
              <p className="text-sm text-gray-700 mb-4">Settings</p>
              <ul className="space-y-3">
                <Link
                  to={"/profile"}
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <img
                    src={user.profile_pic}
                    alt=""
                    className="w-6 h-6 rounded-full object-cover bg-gray-100"
                  />
                  <p className="font-semibold text-sm">{user.name}</p>
                </Link>

                <li className="flex gap-3 items-center cursor-pointer">
                  <AiOutlineSetting className="w-6 h-6 rounded-full" />
                  <p className="font-semibold text-sm">Settings</p>
                </li>

                <button
                  onClick={handleLogout}
                  className="flex gap-3 items-center cursor-pointer"
                >
                  <AiOutlineLogout className="w-6 h-6 rounded-full" />
                  <p className="font-semibold text-sm">Sign Out</p>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
