import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider, Routes, Route } from "react-router-dom";
import Nabar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import ProtectedRoutes from "./components/protected/ProtectedRoutes";
import HomeNav from "./components/homeNavbar/HomeNav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Gigs from "./pages/gigs/Gigs";
import MyGig from "./pages/myGig/MyGig";
import Test from "./pages/test/Test";
import InPro from "./pages/inProgress/InPro";
import Comp from "./pages/comp/Comp";
import Chat from "./pages/chat/Chat";
import Forge from "./pages/forge/Forge";
import MyProgress from "./pages/myProgress/MyProgress";
import MyComp from "./pages/myComp/MyComp";
import Video from "./pages/video/Video";
import Settings from "./pages/settings/Settings";
import ContactUs from "./pages/contactUs/ContactUs";
import Dpost from "./pages/dPost/Dpost";


import { useMutation, useQuery } from "convex/react";
import { api } from "/convex/_generated/api";

function App() {
  const posts = useQuery(api.posts.list) || [];

  const Layout = () => {
    return (
      <Outlet />)
    {/* <HomeNav /> */ }
  };


  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/nav" element={<HomeNav />} /> */}
        <Route path="/navb" element={<Nabar />} />
        {/* <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} /> */}

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="add" element={<Add />} />
        <Route path="progress" element={<InPro />} />
        <Route path="complete" element={<Comp />} />
        <Route path="myprogress" element={<MyProgress />} />
        <Route path="mycompleted" element={<MyComp />} />
        <Route path="settings" element={<Settings />} />

        <Route path="apage" element={<Video />} />
        {
          posts.map((post) => (
            <>
              <Route path={'posts/:postId'} element={<Dpost />} />
            </>
          ))
        }

        <Route path="contact-us" element={<ContactUs />} />
        <Route element={<ProtectedRoutes />}>

          <Route path="dashboard" element={<MyGig />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="countdown" element={<CountdownTimer />} /> */}
          <Route path="chat" element={<Chat />} />
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Route>
    </Routes >
  );
}

export default App;
