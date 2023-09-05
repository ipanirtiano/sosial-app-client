/* eslint-disable react/prop-types */
import Menu from "./Menu";

const LeftBar = () => {
  return (
    <>
      <div className="lg:w-[20%] md:w-[30%] h-screen overflow-auto hidden md:block bg-white pt-[80px] px-6 text-gray-800">
        <Menu />
      </div>
    </>
  );
};

export default LeftBar;
