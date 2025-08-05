import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import "./index.css";
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx';
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Add from "./pages/add/Add";
// import Navbar from "./components/navbar/Navbar";
// import Forge from "./pages/forge/Forge";
// import UseList from "./pages/userList/UsersList";
// import { Provider } from 'react-redux';

import { createBrowserRouter, Outlet, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react';

import { ConvexProvider, ConvexReactClient } from "convex/react";
const addr = import.meta.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(addr);

import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>,
);



