/* eslint-disable react/prop-types */
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
  // state user
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="pb-6 border-b border-gray-300">
        <ul className="space-y-4 ">
          <Link
            to={"/profile"}
            className="flex gap-3 items-center cursor-pointer"
          >
            <img
              src={user.profile_pic}
              alt=""
              className="w-6 h-6 rounded-full object-cover bg-gray-200"
            />
            <p className="font-semibold text-sm">{user.name}</p>
          </Link>

          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img1} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Friends</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img
              src={img2}
              alt=""
              className="w-5 h-5 rounded-full bg-gray-200"
            />
            <p className="font-semibold text-sm">Groups</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img3} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Market Places</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img4} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Watch</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img
              src={img5}
              alt=""
              className="w-5 h-5 rounded-full bg-gray-200"
            />
            <p className="font-semibold text-sm">Memories</p>
          </li>
        </ul>
      </div>

      <div className="py-4 pb-6 border-b border-gray-300">
        <p className="text-sm font-semibold mb-5 text-gray-500">Your Favorit</p>
        <ul className="space-y-4">
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img6} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Events</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img7} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Games</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img8} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Photos</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img9} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Films</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img10} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Messages</p>
          </li>
        </ul>
      </div>

      <div className="py-4 pb-6 border-b border-gray-300">
        <p className="text-sm font-semibold mb-5 text-gray-500">Others</p>
        <ul className="space-y-4">
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img11} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Tutorials</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img
              src={img12}
              alt=""
              className="w-5 h-5 rounded-full bg-gray-200"
            />
            <p className="font-semibold text-sm">Dekstop</p>
          </li>
          <li className="flex gap-3 items-center cursor-pointer">
            <img src={img13} alt="" className="w-5 h-5 bg-gray-200" />
            <p className="font-semibold text-sm">Content</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
