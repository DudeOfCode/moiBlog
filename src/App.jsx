import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Nabar from "./components/navbar/Navbar";
import ProtectedRoutes from "./components/protected/ProtectedRoutes";
import HomeNav from "./components/homeNavbar/HomeNav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Gigs from "./pages/gigs/Gigs"
import Test from "./pages/test/Test";
import InPro from "./pages/inProgress/InPro";
import Comp from "./pages/comp/Comp";
import Chat from "./pages/chat/Chat";
import Forge from "./pages/forge/Forge";
import MyProgress from "./pages/myProgress/MyProgress";
import MyComp from "./pages/myComp/MyComp";
import Video from "./pages/video/Video";



function App() {
  const Layout = () => {
    return (
      <div className="app">

        {/* <HomeNav /> */}
        <Nabar />
        <Outlet />

      </div>
    );
  };

  const router = createBrowserRouter([
    {


      element: <ProtectedRoutes />,
      children: [

        {


          element: <Layout />,
          children: [
            {
              path: "/add",
              element: <Add />,
            },
          ]
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/dashboard",
          element: <MyGig />,
        },

        // {
        //   path: "/gig/:id",
        //   element: <Gig />,
        // },
      ],
    },
    {

      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/add",
          element: <Add />,
        },
        // {
        //   path: "/gig/:id",
        //   element: <Gig />,
        // },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forge",
      element: <Forge />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/apage",
      element: <Video />,
    },
    {
      path: "/progress",
      element: <InPro />,
    },
    {
      path: "/complete",
      element: <Comp />,
    },
    {
      path: "/myprogress",
      element: <MyProgress />,
    },
    {
      path: "/mycompleted",
      element: <MyComp />,
    },
    {
      path: "/gigs",
      element: <Gigs />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
