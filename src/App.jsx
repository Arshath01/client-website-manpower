import React from "react";
import Home from "./Page/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Page/Services";
import Admin from "./Page/admin";
import Footer from "./Components/Footer";
import AllService from "./Components/servicePage/AllService";
import Edit from "./Components/servicePage/Edit";
import Slogan from "./Components/slogan";
export default function App() {
  return (
    <>
      {/* <div className="h-screen w-full flex flex-col space-y-2 justify-center items-center bg-gray-200">
        <span className="text-3xl font-bold text-red-500">OOPS !</span>
        <h1 className="uppercase font-bold text-2xl">
          website is' under maintanance
        </h1>
      </div> */}
      <Slogan />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:Category" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/allService" element={<AllService />} />
        <Route path="/admin/edit/:id" element={<Edit />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
