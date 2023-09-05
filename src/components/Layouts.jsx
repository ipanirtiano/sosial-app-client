/* eslint-disable react/prop-types */
import LeftBar from "./Leftbar";
import Navbar from "./Navbar";
import RightBar from "./RightBar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-[1900px] mx-auto">
        <Navbar />
        <div className="flex items-start gap-4 w-full">
          <LeftBar />
          {children}
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
