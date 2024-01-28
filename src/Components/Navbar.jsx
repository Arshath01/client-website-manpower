import React, { useState } from "react";
import logo from "../assets/logo/logoIcon.jpg";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const navigation = ["Home", "Services", "About", "Contact"];
  return (
    <div className="">
      <div className="p-2 flex items-center justify-between px-4">
        <div className="flex items-center lg:space-x-2">
          <img src={logo} alt="logo" className="rounded-full h-10" />
          <h1 className="space-x-1 font-bold lg:text-2xl uppercase">
            <span className="text-green-500">Amogam</span>{" "}
            <span className="text-orange-400">ManPower</span>{" "}
            <span className="text-green-400">&</span>{" "}
            <span className="text-blue-400">CleanCare</span>
          </h1>
        </div>
        <div className="">
          <i
            className="fas fa-bars lg:hidden "
            onClick={() => setIsMenu(!isMenu)}
          ></i>
          <ul
            className={`lg:flex mr-2 px-2 flex-col lg:flex-row lg:space-x-6 text-sm font-bold absolute right-0 top-[12%]  w-1/2 space-y-5 bg-white border p-8 justify-center items-center h-[40vh] lg:h-fit lg:border-none  lg:space-y-0 lg:relative lg:w-full lg:p-2 ${
              isMenu ? "flex " : "hidden"
            }`}
          >
            {navigation.map((nav, index) => (
              <li key={index} className="py-2 lg:p-0">
                <a href={`#${nav.toLowerCase()}`}>{nav}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
