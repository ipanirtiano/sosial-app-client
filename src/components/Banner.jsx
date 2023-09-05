/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
const Banner = () => {
  // state user
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="w-full h-[200px] bg-white relative">
        <img
          src={user.cover_pic}
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          src={user.profile_pic}
          alt=""
          className="w-[130px] h-[130px] bg-gray-100 rounded-full absolute bottom-[-60px] left-[50%] translate-x-[-50%] border-[3px] border-white shadow-lg object-cover"
        />
      </div>
    </>
  );
};

export default Banner;
