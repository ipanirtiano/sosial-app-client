/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  AiOutlineCheck,
  AiOutlineWhatsApp,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsFacebook, BsGlobe, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

const ProfileDetails = () => {
  // state seting toggle
  const [oppenSetting, setOppenSetting] = useState(false);
  // state user
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="w-full bg-white text-gray-900 pb-8">
        <div className="pt-[70px] flex flex-col justify-center items-center mb-4">
          <p className="font-semibold text-2xl">{user.name}</p>
          <div className="flex gap-3 py-2">
            <p className="text-sm text-gray-600">4578K Followers</p>
            <div className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs">
              <AiOutlineCheck />
            </div>
          </div>
          <div
            onClick={() => setOppenSetting(!oppenSetting)}
            className="flex items-center gap-1 bg-blue-600 text-white cursor-pointer py-2 px-3"
          >
            <FiSettings />
            <p className="text-sm">Settings</p>
          </div>
        </div>

        {oppenSetting && (
          <div className="w-full bg-white mb-3 py-3 px-6">
            <p className="font-semibold text-xl mb-4">Update Profile</p>

            <div className="flex items-center gap-3">
              <div className="w-[100px] h-[100px] relative">
                <img
                  src={user.profile_pic}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <input
                  type="file"
                  id="file"
                  className=" text-sm text-slate-500  hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white cursor-pointer">
                  <label htmlFor="file">
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                      <BiEdit className="text-xl" />
                      <p className="text-xs">Edit Profile</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="w-[100px] h-[100px] relative">
                <img
                  src={user.cover_pic}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <input
                  type="file"
                  id="file"
                  className=" text-sm text-slate-500  hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white cursor-pointer">
                  <label htmlFor="file">
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                      <BiEdit className="text-xl" />
                      <p className="text-xs">Edit Cover</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-between flex-wrap pt-6">
              <div className="">
                <div>
                  <label className="text-xs text-gray-600">Name</label>
                  <input
                    type="email"
                    className="border-b border-gray-300 w-full placeholder:text-sm py-2 outline-none mb-3"
                    placeholder="Username / Email"
                    name="email"
                    value={user.name}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600">Username</label>
                  <input
                    type="email"
                    className="border-b border-gray-300 w-full placeholder:text-sm py-2 outline-none mb-3"
                    placeholder="Username / Email"
                    name="email"
                    value={user.email}
                  />
                </div>
              </div>

              <div className="">
                <div>
                  <label className="text-xs text-gray-600">Phone</label>
                  <input
                    type="email"
                    className="border-b border-gray-300 w-full placeholder:text-sm py-2 outline-none mb-3"
                    placeholder="Username / Email"
                    name="email"
                    value={user.phone}
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600">Website</label>
                  <input
                    type="email"
                    className="border-b border-gray-300 w-full placeholder:text-sm py-2 outline-none mb-3 "
                    placeholder="Username / Email"
                    name="email"
                    value={user.website}
                  />
                </div>
              </div>
            </div>

            <div className="w-full bg-blue-600 text-white py-3 text-center text-sm cursor-pointer">
              Update Profile
            </div>
          </div>
        )}

        <div className="px-6">
          <p className="font-semibold text-xl mb-4">Contact</p>

          <div className="flex flex-wrap justify-between gap-2">
            <div className="md:max-w-[40%] w-full">
              <ul>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <AiTwotoneMail className="text-xl" />
                  <p className="text-sm">{user.email}</p>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <AiOutlineWhatsApp className="text-xl" />
                  <p className="text-sm">{user.phone}</p>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <BsGlobe className="text-xl" />
                  <p className="text-sm">{user.website}</p>
                </li>
              </ul>
            </div>

            <div className="md:max-w-[40%] w-full">
              <ul>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <BsFacebook className="text-xl" />
                  <p className="text-sm">@ipanirtiano</p>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <BsInstagram className="text-xl" />
                  <p className="text-sm">@ipanirtiano</p>
                </li>
                <li className="flex items-center space-x-2 py-2 border-b border-gray-300">
                  <BsTwitter className="text-xl" />
                  <p className="text-sm">@ipanirtiano</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
