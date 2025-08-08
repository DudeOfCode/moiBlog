import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider, Routes, Route } from "react-router-dom";
import Nabar from "./components/navbar/Navbar";
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



function App() {
  const Layout = () => {
    return (
      <Outlet />)
    {/* <HomeNav /> */ }
  };

  // const router = createBrowserRouter([
  //   {


  //     element: <ProtectedRoutes />,
  //     children: [

  //       {


  //         element: <Layout />,
  //         children: [
  //           {
  //             path: "/add",
  //             element: <Add />,
  //           },
  //         ]
  //       },
  //       {
  //         path: "/test",
  //         element: <Test />,
  //       },
  //       {
  //         path: "/dashboard",
  //         element: <MyGig />,
  //       },

  //       // {
  //       //   path: "/gig/:id",
  //       //   element: <Gig />,
  //       // },
  //     ],
  //   },
  //   {

  //     path: "/",
  //     element: <Layout />,
  //     children: [

  //       {
  //         path: "/",
  //         element: <Home />,
  //       },

  //       {
  //         path: "/add",
  //         element: <Add />,
  //       },
  //       // {
  //       //   path: "/gig/:id",
  //       //   element: <Gig />,
  //       // },
  //     ],
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/progress",
  //     element: <InPro />,
  //   },
  //   {
  //     path: "/complete",
  //     element: <Comp />,
  //   },
  //   {
  //     path: "/myprogress",
  //     element: <MyProgress />,
  //   },
  //   {
  //     path: "/settings",
  //     element: <Settings />,
  //   },
  //   {
  //     path: "/mycompleted",
  //     element: <MyComp />,
  //   },
  //   {
  //     path: "/gigs",
  //     element: <Gigs />,
  //   },
  //   {
  //     path: "/chat",
  //     element: <Chat />,
  //   },

  // ]);

  // return <RouterProvider router={router} />;
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

        <Route path="video" element={<Video />} />
        <Route element={<ProtectedRoutes />}>

          <Route path="dashboard" element={<MyGig />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="countdown" element={<CountdownTimer />} /> */}
          {/* <Route path="chat" element={<Chat />} /> */}
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
