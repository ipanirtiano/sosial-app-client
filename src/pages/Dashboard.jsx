import { useEffect } from "react";
import Content from "../components/Content";
import Layout from "../components/Layouts";
import Post from "../components/Post";
import Stories from "../components/Stories";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../utils/UserSlice";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

const Dashboard = () => {
  // state auth
  const { token } = useSelector((state) => state.auth);
  // set navigate
  const navigate = useNavigate();
  // set dispatch
  const dispatch = useDispatch();

  // useefect to get new token and get user info
  useEffect(() => {
    // validate token
    if (!token) {
      navigate("/");
    }

    try {
      // dispatch get user info
      dispatch(getUserInfo());
    } catch (error) {
      console.log(error.message);
      navigate("/");
    }
  }, []);

  // state useQueri get all POST
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axios.get("https://sosial-app-server-api.vercel.app/post").then((res) => {
      return res.data;
    })
  );

  return (
    <>
      <Layout>
        <div className="w-full h-screen overflow-auto pt-[70px] md:w-[60%] px-3 pb-6">
          <Stories />
          <Post />
          {error ? (
            "Oopss Something went wrong!..."
          ) : isLoading ? (
            <Loading />
          ) : (
            data.map((post, i) => {
              return <Content key={i} post={post} />;
            })
          )}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
